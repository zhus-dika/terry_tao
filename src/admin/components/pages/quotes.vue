<template lang="pug">
  .quotes
    .container.quotes__container
      new-quote(v-if="addFormVisible" @toggleAddForm="toggleAddForm")
      edited-quote(v-if="editFormVisible" 
        :updatedQuote="updatedQuote"
        @toggleAddEditFormFromForm="toggleAddEditForm"
      )
      ul.quotes__list
        .new-quote
          .add-item__wrapper-button
            button.add-item(name="add-item" @click="toggleAddForm")
              .item__title Add quote
        li.current-quote(v-for="quote in quotes" :key="quote.id")
            quotes-group(
              :quote="quote"
              @toggleAddEditForm="toggleAddEditForm"
            )
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    quotesGroup: () => import("../quotes-group"),
    newQuote: () => import("../new-quote"),
    editedQuote: () => import("../edited-quote"),
  },
  data () {
    return {
      createdmode: false,
      addFormVisible: false,
      editFormVisible: false,
      updatedQuote: {}
    }
  },
  computed : {
    ...mapState("quotes", {
      quotes: state => {
        return state.quotes
      }
    })
  },
  mounted() {
    this.fetchQuotes()
  },
  methods: {
    ...mapActions("quotes", ["fetchQuotes"]),
    toggleAddForm() {
      this.addFormVisible = !this.addFormVisible
    },
    toggleAddEditForm(data) {
      this.editFormVisible = !this.editFormVisible
      this.updatedQuote = data.updatedQuote
    }
  }
};
</script>