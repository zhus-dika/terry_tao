<template lang="pug">
    div
        .add-group
            .add-group__wrapper
              button.add-group__button(name='add-group__button' type="button" @click="addNewCategory") Add group
                .add-group__icon
        .group__form
            .form-input__group
                input.form-input__group-name(name='group' type='text' placeholder="New group's name" required v-model="category.category") 
                .form-group__buttons
                    .form-button__submit__wrapper
                        button.form-button__submit(type="button") 
                    .form-button__reset__wrapper
                        input.form-button__reset(type='reset') 
            .form-input__current-points
                ul.current-points__list
                    new-form-skills-item(v-for="skill in localSkills"
                        :key="skill.id"
                        :skill="skill"
                        @editSkill='editExistedSkill' 
                        @removeSkill='removeExistedSkill' 
                    )
            form(:class={blocked: loading}).form-input__new-skill 
                input.form-input__skill-name.active(name='skill-name' type='text' placeholder="New skill" v-model="newSkill.title" required) 
                .form__skill-value.active
                    input.form-input__skill-value(name='skill-value' type='number' placeholder="100" v-model="newSkill.percent" required) 
                    .percent-icon %
                .form-button__add__wrapper
                    button.form-button__add(name='add-skill' type="submit" :disabled="loading" @click.prevent="addLocalSkill") 

</template>
<script>
var initNum = 0
import { mapState, mapActions } from "vuex";
export default {
  data () {
    return {
        loading: false,
        category: {

        },
        localSkills: [],
        newSkill: {
            id: initNum,
            title: '',
            percent: 0
        }, 
        valSkill: {
            title: '',
            percent: 0,
            category: 0
        },
    }
  },
  components: {
    newFormSkillsItem: () => import("./new-form-skills-item")
  },
  mounted() {
    if (localStorage.getItem('localSkills')) {
      try {
        this.localSkills = JSON.parse(localStorage.getItem('localSkills'));
      } catch(e) {
        localStorage.removeItem('localSkills');
      }
    }
  },
  methods: {
      ...mapActions("categories", ["addCategory", "fetchCategories"]),
      ...mapActions("skills", ["addSkill"]),
    async addNewSkill(skill) {
      this.loading = true;
      try {
        await this.addSkill(skill);
      } catch (error) {
        // handling error
      } finally {
        this.loading = false;
      }
    },
    async addNewCategory() {
      try {
        if(!this.category.category) {
            alert('Enter category name')
            return
        }
        this.category = await this.addCategory(this.category.category);
        let arrSkills = JSON.parse(localStorage.getItem('localSkills'))
        arrSkills.forEach (item=>{
          let skill = {
            title: item.title,
            percent: item.percent,
            category: this.category.id
          }
            this.addNewSkill(skill)
            console.log(skill)
        })
      } catch (error) {
        alert(error.message);
      }
      localStorage.removeItem('localSkills');
      this.localSkills={}
      this.category.category = ''
    },
    addLocalSkill() {
      // убедиться, что было что-либо введено
      if(!this.category.category) {
          alert('Enter category name')
          return
      }
      if (!this.newSkill.title) {
        return;
      }
        this.newSkill.id = initNum++
        this.localSkills.push(this.newSkill);
        this.saveSkill();
        this.newSkill = {};
        return this.localSkills
    },
    saveSkill() {
        console.log('from save')
        const parsed = JSON.stringify(this.localSkills);
        localStorage.setItem('localSkills', parsed);
    },
    async editExistedSkill(editedSkill) {
        await this.localSkills.map(item=>{
            if(editedSkill.skill.id === item.id) {
                item.title = editedSkill.skill.title
                item.percent = editedSkill.skill.percent
            }
        })
        this.saveSkill()
    },
    removeExistedSkill(removedSkill) {
        console.log(removedSkill.id)
        this.skills = this.localSkills.filter(item=> {
            if(removedSkill.id !== item.id) {
                return item
            }
        })
        this.saveSkill();
    },
  }
}

</script>