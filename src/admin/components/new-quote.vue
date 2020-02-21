<template lang="pug">    
    .add__quote-wrapper
        .form__title New quote
        .quote__container
            .add__quote
                .quote__author-img 
                .new-quote__text 
                    .add__photo-wrapper
                        button.add__photo(name='add__photo') Add photo
            .quote-form__wrapper
                form.quote-form
                    .form__rows
                        .form__row
                            label.form__block-new(for='')
                                .form-label-new Author's name
                                input.form-input__quote(name='author-name' type='text' placeholder="Albert Einstein" required v-model="quote.author") 
                            label.form__block-new(for='')
                                .form-label-new Author's occupation
                                input.form-input__quote(name='author-occ' type='text' placeholder="Great scientist" required v-model="quote.occ") 
                        .form__row
                            label.form__block-new(for='')
                                .form-label-new Quote
                                textarea.form-input__quote(name='quote' type='text' placeholder="I believe in intuitions and inspirations. I sometimes feel that I am right. I do not know that I am." rows="3" cols = "43" required v-model="quote.text")
                    .form__buttons
                        input.form__button-cancel(type='reset' value='Cancel')
                        input.form__button-save(type='submit' value='Save' @ckick.prevent="addNewQuote")
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data () {
    return {
      quote: {
        file: '',
        author: '',
        occ: '',
        text: ''
      }
    }
  },
  methods: {
    ...mapActions("quotes", ["addQuote"]),
    async addNewQuote() {
      try {
        this.category = await this.addQuote(this.quote); 
        this.$emit("toggleAddForm")  
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>