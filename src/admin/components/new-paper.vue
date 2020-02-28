<template lang="pug">
    .new__paper
        .form__title New paper
        form.edit__paper(@submit.prevent="addNewPaper")
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
            .form__wrapper
              .paper-edit__form
                label.form__block(for='')
                  .form-label.first Name
                  input.form-input__paper(name='paper-name' type='text' v-model="paper.title" placeholder="A sum-product estimate in finite fields, and applications" required) 
                label.form__block(for='')
                  .form-label Link
                  input.form-input__paper(name='paper-link' type='text' v-model="paper.link" placeholder="https://arxiv.org/abs/math/0301343" required) 
                label.form__block(for='')
                  .form-label Description
                  textarea.form-input__paper(name='paper-desc' type='text' v-model="paper.description" placeholder="Let A be a subset of a finite field $F := Z/qZ$ for some prime q. If |F|δ<|A|<|F|1−δ for some δ>0, then we prove the estimate $|A+A| + |A.A| geq c(delta) |A|^{1+eps}$ for some $eps = eps(delta) > 0$. This is a finite field analogue of a result of Erdos and Szemeredi. We then use this estimate to prove a Szemeredi-Trotter type theorem in finite fields, and obtain a new estimate for the Erdos distance problem in finite fields, as well as the three-dimensional Kakeya problem in finite fields." rows="3" cols = "43")
                label.form__block(for='')
                  .form-label Add tag
                  input.form-input__paper(name='paper-add_tag' type='text' v-model="paper.techs" placeholder="Combinatorics (math.CO), Number Theory (math.NT)" required) 
                .current-tags
                    paper-tags(
                        :paperTags = "paper.techs"
                        @updateTags="updateTags"
                    )
                    .form__buttons
                        input.form__button-cancel(type='reset' value='Cancel' @click.prevent="cancelAddPaper")
                        input.form__button-save(type='submit' value='Save')
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
    components: {
        paperTags: () => import("./paper-tags")
    },
    computed: {
        tags: function() {
            return this.paper.techs.split(", ")
        }
    },
    data () {
    return {
        renderedPhoto: '',
        photoUpload: false,
        paper: {
            title: '',
            techs: '',
            photo: {},
            link: '',
            description: ''
        }
    }
    },
    methods: {
        ...mapActions("papers", ["addPaper"]),
        async addNewPaper() {
            try {
                await this.addPaper(this.paper); 
                    this.$emit("toggleAddForm")  
                } catch (error) {
                alert(error.message);
                }
        },
        cancelAddPaper(){
            this.$emit("toggleAddForm")
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
            const file = e.target.files[0]
            this.paper.photo = file
            this.photoUpload = true
            this.renderImageFile(file)
        },
        updateTags(data) {
            if (data.id === this.tags.length - 1)
                this.paper.techs = this.paper.techs.replace(data.updatedTags, '')
            else
                this.paper.techs = this.paper.techs.replace(data.updatedTags + ', ', '')
            if (data.id === 0 && this.tags[0].length === 1){
                this.paper.techs = ''
            }
        }
    }
};
    </script>