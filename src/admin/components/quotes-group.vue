<template lang="pug">
  .current-quote__content
    .quote__author-content
        .quote__author-photo
            img(:src="`https://webdev-api.loftschool.com/${quote.photo}`" class="quote__author-img")
        .quote__author-text
            .quote__author-name {{quote.author}}
            .quote__author-occupation {{quote.occ}}
    .quote__content-text {{quote.text}}
    .buttons__wrapper
        .button__wrapper
            button.button__edit(@click="editExistedQuote") 
              .button__name Edit
        .button__wrapper
            button.button__remove(@click="deleteExistedQuote") 
              .button__name Remove

</template>
<script>
import { mapState, mapActions } from "vuex";

export default {
  data () {
    return {
      editFormVisible: false,
      createdmode: false
    }
  },
  computed : {
    ...mapState("quotes", {
      quotes: state => {
        return state.quotes
      }
    })
  },
  components: {
    editedQuote: () => import("./edited-quote")
  },
  props: {
    quote: {
        type: Object
    }
  },
  methods: {
    ...mapActions("quotes", ["deleteQuote"]),
    async deleteExistedQuote() {
      try {
        await this.deleteQuote(this.quote);
      } catch (error) {
        alert(error.message);
      }
    },
    editExistedQuote() {
      this.$emit("toggleAddEditForm", {
        updatedQuote: this.quote
      }) 
    }
  }
};
</script>