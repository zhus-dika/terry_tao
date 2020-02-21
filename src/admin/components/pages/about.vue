<template lang="pug">
  .about
    .container.about__container
      .about__content
        .content-header
          .section__title "About" block
        ul.about__groups
          li.group
            new-form-skills
          li.group(v-for="category in categories" :key="category.id")
            form.group__form
              .form-input__group
                input.form-input__group-name(name='group' type='text' placeholder="Gruop's name" required v-model="category.category") 
                .form-group__buttons
                  .form-button__submit__wrapper
                    button.form-button__submit(type="button" @click.prevent="editExistedCategory") 
                  .form-button__reset__wrapper
                     input.form-button__reset(type='reset') 
              .form-input__current-points
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
      }
    }
  },
  computed : {
    ...mapState("categories", {
      categories: state => {
        return state.categories
      }
    })
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    ...mapActions("categories", ["editCategory", "deleteCategory", "fetchCategories"]),

    async deleteExistedCategory() {
      try {
        await this.deleteCategory(this.category);
      } catch (error) {
        alert(error.message);
      }
    },
    async editExistedCategory() {
      try {
        console.log(this.category)
        await this.editCategory(this.category);
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>