<template lang="pug">
    .new__paper 
      .form__title Edited paper
      .edit__paper
        .upload-block
          label.paper__photo
            .paper__photo-upload(
                :style="{backgroundImage: `url(${renderedPhoto})`}"
            )
                .upload-text__wrapper(
                    v-if="!photoUpload"
                    )
                    .upload-text Drag or drop to upload image
                    .upload-photo__wrapper
                        input.upload-photo(type="file" required @change="handlePhoto").quotes__form-file-input
                        .form__button-save 
                            .form__button-save-name Add photo
        form.form__wrapper
          .paper-edit__form(action='')
            label.form__block(for='')
              .form-label.first Name
              input.form-input__paper(name='paper-name' type='text' required v-model="currentPaper.title") 
            label.form__block(for='')
              .form-label Link
              input.form-input__paper(name='paper-link' type='text' v-model="currentPaper.link" required) 
            label.form__block(for='')
              .form-label Description
              textarea.form-input__paper(name='paper-desc' type='text' v-model="currentPaper.description" rows="3" cols = "43")
            label.form__block(for='')
              .form-label Add tag
              input.form-input__paper(name='paper-add_tag' type='text' v-model="currentPaper.techs") 
            .current-tags
              paper-tags(
                  :paperTags = "currentPaper.techs"
                  @updateTags="updateTags"
              )
              .form__buttons
                button.form__button-cancel(type='reset' @click="cancelUpdate") Cancel
                button.form__button-save(type='submit' @click.prevent="updatePaper") Save
</template>
<script>
import { mapActions, mapState, mapMutations} from "vuex";
export default {
  data () {
    return {
      photoUpload: false,
      newPhotoUpload: false,
      renderedPhoto: '',
      currentPaper: this.updatedPaper
    }
  },
  components: {
        paperTags: () => import("./paper-tags")
    },
    computed: {
        tags: function() {
          return this.currentPaper.techs.split(", ")
        }
    },
  props: {
    updatedPaper: {
      type: Object
    }
  },
    computed : {
    ...mapState("papers", {
      papers: state => {
        return state.papers
      }
    })
  },
  created: function () {
    const local = JSON.stringify(this.updatedPaper)
    localStorage.setItem('currentPaper', local)
  },
  methods: {
    ...mapActions("papers", ["addPaper", "editPaper"]),
    ...mapMutations("papers", ["EDIT_PAPER"]),
    async updatePaper() {
      try {
        await this.editPaper(this.currentPaper); 
        this.$emit("toggleAddEditFormFromForm",{
          updatedPaper: {}
        })  
      } catch (error) {
        alert(error.message);
      }
    },
    async cancelUpdate() {
      this.currentPaper = JSON.parse(localStorage.getItem('currentPaper'))
      this.EDIT_PAPER(this.currentPaper)
      this.$emit("toggleAddEditFormFromForm",{
          updatedPaper: this.currentPaper
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
      this.photoUpload = true
      this.currentPaper.photo = file
      this.renderImageFile(file)
    },
    updateTags(data) {
      let arrTags = this.currentPaper.techs.split(',')
      if (data.id === arrTags.length - 1)
          this.currentPaper.techs = this.currentPaper.techs.replace(data.updatedTags, '')
      else
          this.currentPaper.techs = this.currentPaper.techs.replace(data.updatedTags + ', ', '')
      if (data.id === 0 && arrTags.length === 1){
          this.currentPaper.techs = ''
      }
    }
  }
};
</script>