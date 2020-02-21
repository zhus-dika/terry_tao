<template lang="pug">
  .quotes
    .container.quotes__container
      new-quote
      ul.quotes__list
        .new-quote
          .add-item__wrapper-button
            button.add-item(name="add-item")
              .item__title Add quote
        li.current-quote(v-for="quote in quotes" :key="quote.id")
            quotes-group(
              :quote="quote"
            )
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    quotesGroup: () => import("../quotes-group"),
    newQuote: () => import("../new-quote")
  },
  data () {
    return {
      createdmode: false,
      addFormVisible: false,
      deleteCategoryVal: false
    }
  },
  computed : {
    ...mapState("quotes", {
      quotes: state => {
        return state.quotes
      }
    })
  },
  created() {
    this.fetchQuotes()
  },
  methods: {
    ...mapActions("quotes", ["fetchQuotes"]),
    toggleAddForm() {
      this.addFormVisible = !this.addFormVisible
    }
  }
};
</script>