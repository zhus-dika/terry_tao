<template lang="pug">
div
    li(v-if="!editmode").current-points__item
        .form-input__skill-name
            .form-input__skill {{skill.title}}
        .form__skill-value
            .form-input__skill-value {{skill.percent}}
            .percent-icon %
        .form-group__buttons
            .form-button__edit__wrapper
                button.form-button__edit(name='edit' type="button" @click="editmode = true")
            .form-button__delete__wrapper
                button.form-button__delete(name='delete' type="button" @click="removeSkill")
    li(v-else).current-points__item
        .form-input__skill-name.active
             input.form-input__skill(name='group' type='text' v-model="editedSkill.title")
        .form__skill-value.active
            input.form-input__skill-value(name='skill-value' type='number' v-model="editedSkill.percent") 
            .percent-icon %
        .form-group__buttons
            .form-button__submit__wrapper
                button.form-button__submit(name='submit' type="button" @click="editSkill")
            .form-button__reset__wrapper
                button.form-button__reset(name='reset' type="reset" @click="editmode = false")
        

</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data () {
    return {
        editmode: false,
        editedSkill: { ...this.skill },  
        category: {
        },
        editedSkill: this.skill
    }
  },
  props: {
      skill: {
          type: Object
      }
  },
  methods: {
    removeSkill() {
        console.log('from remove')
        this.$emit('removeSkill', {
        id: this.skill.id
        })
    },
    editSkill() {
        this.editmode = false
        this.$emit('editSkill', {
        skill:{
            title: this.editedSkill.title,
            percent: this.editedSkill.percent,
            id: this.editedSkill.id
        }
    })
    }
  }
}

</script>