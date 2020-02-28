<template lang="pug">
  .about
    .container.about__container
      .about__content
        .content-header
          .section__title "About" block
          .add-group
            .add-group__wrapper
              button.add-group__button(name='add-group__button' type="button" @click="toggleAddForm") Add group
                .add-group__icon
        ul.about__groups
          new-form-skills(v-if="addFormVisible" @toggleAddForm="toggleAddForm")
          li.group(v-for="category in categories" :key="category.id")
            skills-group(
              :category="category"
            )
</template>


<script>
import { mapActions, mapState } from "vuex";
export default {
  components: {
    skillsGroup: () => import("../skills-group"),
    newFormSkills: () => import("../new-form-skills")
  },
  data () {
    return {
      title: 'default',
      createdmode: false,
      category: {
        category: '',
        skills: []
      },
      addFormVisible: false
    }
  },
  computed : {
    ...mapState("categories", {
      categories: state => {
        return state.categories
      }
    }),
    ...mapState("user", {
      user: state => {
        return state.user
      }
    })
  },
  created() {
    this.fetchCategories(this.user.id)
  },
  methods: {
    ...mapActions("categories", ["fetchCategories"]),
    toggleAddForm() {
      this.addFormVisible = !this.addFormVisible
    }
  }
};
</script>