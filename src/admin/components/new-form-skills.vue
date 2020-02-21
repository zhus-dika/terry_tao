<template lang="pug">
      li.group
        .group__form
          .form-input__group(v-if="editmode")
              input.form-input__group-name(name='group' type='text' placeholder="New group's name" required v-model="title") 
              .form-group__buttons
                  .form-button__submit__wrapper
                      button.form-button__submit(type="button" @click="addNewCategory") 
                  .form-button__reset__wrapper
                      button.form-button__reset(type='reset' @click="editmode = false") 
          .form-input__group(v-else)
              .form-input__group-name.inactive(name='group' type='text' placeholder="New group's name" required v-model="title") New group's name
              .form-group__buttons
                  .form-button__edit__wrapper
                    button.form-button__edit(name='edit' type="button" @click="editmode = true")

          form.form-input__new-skill 
              input.form-input__skill-name.active(name='skill-name' disabled="disabled" type='text' placeholder="New skill") 
              .form__skill-value.active
                  input.form-input__skill-value(name='skill-value' disabled="disabled" type='number' placeholder="100") 
                  .percent-icon %
              .form-button__add__wrapper
                  button.form-button__add(name='add-skill' disabled="disabled" type="submit") 

</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data () {
    return {
      title: '',
      editmode: true,
      category: {
      }
    }
  },
  methods: {
      ...mapActions("categories", ["addCategory", "fetchCategories"]),
    async addNewCategory() {
      try {
        if(!this.title) {
            alert('Enter category name')
            return
        }
        this.category = await this.addCategory(this.title); 
        this.$emit("toggleAddForm")  
      } catch (error) {
        alert(error.message);
      }
    }
  }
}

</script>