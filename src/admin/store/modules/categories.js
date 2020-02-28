export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES: (state, data) => (state.categories = data),
    ADD_CATEGORY: (state, category) => {
      state.categories.unshift(category) 
    },
    DELETE_CATEGORY: (state, deletedCategory) => {
      state.categories = state.categories.filter(
        category => category.id !== deletedCategory.id
        )
    },
    EDIT_CATEGORY: (state, editedCategory) => {
      state.categories = state.categories.map(category => {
        if (editedCategory.id === category.id) {
          category.title = editedCategory.title
        }
        return category
      })
    },
    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if(!category.skills) category.skills=[]
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL: (state, deletedSkill) => {
      const removeSkillInCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };

      const findCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkillInCategory(category);
        }
        return category;
      };
      state.categories = state.categories.map(findCategory);
    },

    EDIT_SKILL: (state, editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === editedSkill.id ? editedSkill : skill;
        });
      };

      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category);
        }
        return category;
      };
      state.categories = state.categories.map(findCategory);
    }
  },
  actions: {
    async addCategory({ commit }, title) {
      try {
        const { data } = await this.$axios.post("/categories", { title });
        commit("ADD_CATEGORY", data);
        return data;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async deleteCategory({ commit }, category) {
      try {
        const { data } = await this.$axios.delete(`/categories/${category.id}`);
        commit("DELETE_CATEGORY", category);
        return category;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editCategory({ commit }, editedCategory) {
      try {
        const title = editedCategory.category
        const { data } = await this.$axios.post(`/categories/${editedCategory.id}`, { title });
        commit("EDIT_CATEGORY", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },

    async fetchCategories({ commit }, id) {
      try {
        const { data } = await this.$axios.get(`/categories/${id}`);
        commit("SET_CATEGORIES", data);
      } catch (error) {}
    }
  }
};
