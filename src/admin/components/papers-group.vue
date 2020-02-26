<template lang="pug">
    .current-paper__content
        .current-paper__photo
            img(:src="`https://webdev-api.loftschool.com/${paper.photo}`" class="current-paper-img")
        .current-paper__description
          .current-tags
              paper-tags(
                  :paperTags = "paper.techs"
              )
          .current-paper__title {{paper.title}}
          .current-paper__text {{paper.description}}
          .current-paper__link
              a.current-paper__href(:href= "paper.link") {{paper.link}}      
          .buttons__wrapper
              .button__wrapper
                  button.button__edit(@click="editExistedPaper")
                      .button__name Edit
              .button__wrapper
                  button.button__remove(@click="deleteExistedPaper") 
                      .button__name Remove
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {
      paper: {
          type: Object
      }
  },
  components: {
        paperTags: () => import("./paper-tags")
  },
  computed: {
        tags: function() {
          return this.paper.techs.split(", ")
        }
  },
  methods: {
    ...mapActions("papers", ["deletePaper"]),
    async deleteExistedPaper() {
      try {
        await this.deletePaper(this.paper);
      } catch (error) {
        alert(error.message);
      }
    },
    editExistedPaper() {
      this.editMode = true
      this.$emit("toggleAddEditForm", {
        updatedPaper: this.paper
      }) 
      this.editMode = !this.editMode
    }
  }
};
</script>