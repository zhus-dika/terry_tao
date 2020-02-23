<template lang="pug">    
    .add__quote-wrapper
        .form__title New quote
        form(@submit.prevent="addNewQuote").quote__container
            .add__quote
              .quotes__form-userpic
                  label.quotes__form-avatar-upload
                    input(
                      name='add__photo' type='file' required @change="handlePhoto"
                    ).quotes__form-file-input 
                    .quotes__form-pic
                      .quotes__form-avatar-empty(
                        :class="{filled: renderedPhoto.length}"
                        :style="{backgroundImage: `url(${renderedPhoto})`}"
                      )
                    .quotes__form-addphoto Add photo
            .quote-form__wrapper
              .quote-form
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
                      input.form__button-cancel(type='reset' value='Cancel' @click="cancelAddQuote")
                      input.form__button-save(type='submit' value='Save')
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data () {
    return {
      renderedPhoto: '',
      quote: {
        photo: {},
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
        this.quote = await this.addQuote(this.quote); 
        this.$emit("toggleAddForm")  
      } catch (error) {
        alert(error.message);
      }
    },
    cancelAddQuote(){
      this.$emit("toggleAddForm")
    },
    renderImageFile(file) {
      const reader = new FileReader()
      try {
        console.log('from render')
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
          this.renderedPhoto = reader.result
        }
      } catch (err) {
        throw new Error('Error read file')
      } 
    },
    handlePhoto(e) {
      const file = e.target.files[0]
      this.quote.photo = file
      this.renderImageFile(file)
    } 
  }
};
</script>