<template lang="pug">
    .papers
      .container.papers__container
        .edit__paper-wrapper(v-if="addFormVisible")
          new-paper(@toggleAddForm="toggleAddForm")
        .edit__paper-wrapper(v-if="editFormVisible")
          edited-paper(
            :updatedPaper="updatedPaper"
            @toggleAddEditFormFromForm="toggleAddEditForm"
          )
        ul.quotes__list
          li.new-paper
            .add-item__wrapper-button
              button.add-item(name="add-item" @click="toggleAddForm")
                .item__title Add paper
          li.current-paper(v-for="paper in papers" :key="paper.id")
            papers-group(
              :paper="paper"
               @toggleAddEditForm="toggleAddEditForm"
            )

</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    papersItem: () => import("../papers-item"),
    papersGroup: () => import("../papers-group"),
    newPaper: () => import("../new-paper"),
    editedPaper: () => import("../edited-paper"),
  },
  data () {
    return {
      createdmode: false,
      addFormVisible: false,
      editFormVisible: false,
      updatedPaper: {}
    }
  },
  computed : {
    ...mapState("papers", {
      papers: state => {
        return state.papers
      }
    })
  },
  mounted() {
    this.fetchPapers()
  },
  methods: {
    ...mapActions("papers", ["fetchPapers"]),
    toggleAddForm() {
      this.addFormVisible = !this.addFormVisible
    },
    toggleAddEditForm(data) {
      this.editFormVisible = !this.editFormVisible
      this.updatedPaper = data.updatedPaper
    }
  }
};
</script>