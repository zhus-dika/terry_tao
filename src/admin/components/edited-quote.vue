<template lang="pug">    
    .add__quote-wrapper
        .form__title Current quote
        form(@submit.prevent="updateQuote").quote__container
            .add__quote
              .quotes__form-userpic
                  label.quotes__form-avatar-upload
                    input(
                      name='add__photo' type='file' @change="handlePhoto"
                    ).quotes__form-file-input 
                    .quotes__form-pic
                      .quotes__form-avatar-empty.filled(v-if="newPhotoUpload"
                        :style="{backgroundImage: `url(${renderedPhoto})`}"
                        )
                      .quotes__form-avatar-empty.filled(
                        :style="{backgroundImage: `url(https://webdev-api.loftschool.com/${currentQuote.photo})`}"
                        )
                    .quotes__form-addphoto Change photo
            .quote-form__wrapper
              .quote-form
                  .form__rows
                      .form__row
                          label.form__block-new(for='')
                              .form-label-new Author's name
                              input.form-input__quote(name='author-name' type='text' placeholder="Albert Einstein" required v-model="currentQuote.author") 
                          label.form__block-new(for='')
                              .form-label-new Author's occupation
                              input.form-input__quote(name='author-occ' type='text' placeholder="Great scientist" required v-model="currentQuote.occ") 
                      .form__row
                          label.form__block-new(for='')
                              .form-label-new Quote
                              textarea.form-input__quote(name='quote' type='text' placeholder="I believe in intuitions and inspirations. I sometimes feel that I am right. I do not know that I am." rows="3" cols = "43" required v-model="currentQuote.text")
                      .form__buttons
                          input.form__button-cancel(type='button' value='Cancel' @click="cancelUpdate")
                          input.form__button-save(type="submit" value='Save changes')
</template>
<script>
import { mapActions, mapState, mapMutations} from "vuex";
export default {
  data () {
    return {
      newPhotoUpload: false,
      renderedPhoto: '',
      currentQuote: this.updatedQuote
    }
  },
  props: {
    updatedQuote: {
      type: Object
    }
  },
    computed : {
    ...mapState("quotes", {
      quotes: state => {
        return state.quotes
      }
    })
  },
  created: function () {
    const local = JSON.stringify(this.updatedQuote)
    localStorage.setItem('currentQuote', local)
  },
  methods: {
    ...mapActions("quotes", ["addQuote", "editQuote"]),
    ...mapMutations("quotes", ["EDIT_QUOTE"]),
    async updateQuote() {
      try {
        this.currentQuote = await this.editQuote(this.currentQuote); 
        this.$emit("toggleAddEditFormFromForm",{
          updatedQuote: {}
        })  
      } catch (error) {
        alert(error.message);
      }
    },
    async cancelUpdate() {
      this.currentQuote = JSON.parse(localStorage.getItem('currentQuote'))
      this.EDIT_QUOTE(this.currentQuote)
      this.$emit("toggleAddEditFormFromForm",{
          updatedQuote: this.currentQuote
        })
    },
    renderImageFile(file) {
      const reader = new FileReader()
      try {
        reader.readAsDataURL(file)
        reader.onloadend=()=>{
          this.renderedPhoto = reader.result
        }
      } catch (err) {
        throw new Error('Error read file')
      } 
    },
    handlePhoto(e) {
      this.newPhotoUpload = true
      const file = e.target.files[0]
      this.currentQuote.photo = file
      this.renderImageFile(file)
    } 
  }
};
</script>