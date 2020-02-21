<template lang="pug">
    ul.current-points__list
      pre {{category.id}}
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
          input.form-input__skill-value(name='skill-value' type='number' placeholder="100" v-model="skill.percent") 
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
    async addNewSkill() {
      this.loading = true;
      try {
        await this.addSkill(this.skill);
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
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


