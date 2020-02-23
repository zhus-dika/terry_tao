<template lang="pug">
  div
    .form-input__group(v-if="editmode")
      input.form-input__group-name(name='group' type='text' placeholder="New group's name" required v-model="category.category") 
      .form-group__buttons
        .form-button__submit__wrapper
            button.form-button__submit(type="button" @click="editExistedCategory") 
        .form-button__reset__wrapper
            button.form-button__reset(type='reset' @click="deleteExistedCategory") 
    .form-input__group(v-else)
      input.form-input__group-name.inactive(name='group' type='text' disabled="disabled" placeholder="Group's name" required v-model="category.category") 
      .form-group__buttons
          .form-button__edit__wrapper
            button.form-button__edit(name='edit' type="button" @click="editmode = true")
    .form-input__current-points
      ul.current-points__list
        skill-item(
              v-for="skill in category.skills"
              :key="skill.id"
              :skill="skill"
        )
    form(
      @submit.prevent="addNewSkill"
      :class={blocked: loading}
    ).form-input__new-skill 
      input.form-input__skill-name.active(name='skill-name' type='text' placeholder="New skill" v-model="skill.title") 
      .form__skill-value.active
        input.form-input__skill-value(name='skill-value' type='number' placeholder="100" min="1" max="100" v-model="skill.percent") 
        .percent-icon %
      .form-button__add__wrapper
        button.form-button__add(name='add-skill' type="submit" :disabled="loading") 
</template>
<script>
import { mapActions } from "vuex";
export default {
  components: {
    skillItem: () => import("./skill-item")
  },
  data() {
    return {
      loading: false,
      editmode: false,
      skill: {
        title: "",
        percent: 0,
        category: this.category.id
      }
    };
  },
  props: {
    category: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    ...mapActions("categories", ["editCategory", "deleteCategory"]),
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);
        this.skill = {}
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    },
    async editExistedCategory() {
      try {
        await this.editCategory(this.category);
        this.editmode = false
      } catch (error) {
        alert(error.message);
      }
    },
    async deleteExistedCategory() {
      try {
        await this.deleteCategory(this.category);
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.add-skill-wrapper.blocked {
  opacity: 0.5;
  filter: grayscale(100%);
  pointer-events: none;
  user-select: none;
}
</style>


