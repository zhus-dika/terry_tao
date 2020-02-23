<template lang="pug">
  li(v-if="editmode === false").current-points__item
    .form-input__skill-name
      .form-input__skill {{editedSkill.title}}
    .form__skill-value
      .form-input__skill-value {{editedSkill.percent}}
      .percent-icon %
    .form-group__buttons
      .form-button__edit__wrapper
        button.form-button__edit(name='edit' type="button" @click="editmode = true")
      .form-button__delete__wrapper
        button.form-button__delete(name='delete' type="button" @click="removeExistedSkill")
  li(v-else).current-points__item
    .form-input__skill-name.active
      input.form-input__skill(name='group' type='text' v-model="editedSkill.title")
    .form__skill-value.active
      input.form-input__skill-value(name='skill-value' type='number' min="1" max="100" v-model="editedSkill.percent") 
      .percent-icon %
    .form-group__buttons
      .form-button__submit__wrapper
        button.form-button__submit(name='submit' type="button" @click="editExistedSkill")
      .form-button__reset__wrapper
        button.form-button__reset(name='reset' type="button" @click="editmode = false")
</template>  
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      editmode: false,
      editedSkill: { ...this.skill },  
    };
  },
  props: {    
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeExistedSkill() {
      try {
        await this.removeSkill(this.skill);
      } catch (error) {}
    },
    async editExistedSkill() {
      try {
        await this.editSkill(this.editedSkill);
        this.editmode = false;
      } catch (error) {

      }
    }
  }
};
</script>