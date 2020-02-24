export default {
    namespaced: true,
    state: {
      papers: []
    },
    mutations: {
      SET_PAPERS: (state, data) => (state.papers = data),
      ADD_PAPER: (state, paper) => state.papers.push(paper),
      DELETE_PAPER: (state, deletedPaper) => {
        state.papers = state.papers.filter(
          paper => paper.id !== deletedPaper.id
          )
      },
      EDIT_PAPER: (state, editedPaper) => {
        state.papers = state.papers.map(paper => {
          if (editedPaper.id === paper.id) {
            paper = editedPaper
          }
          return paper
        })
      }
    },
    actions: {
      async addPaper({ commit }, paper) {
        const formData = new FormData()
        Object.keys(paper).forEach(key=>{
          const value = paper[key]
          formData.append(key, value)
        })
        try {
          const { data } = await this.$axios.post("/works", formData);
          commit("ADD_PAPER", data);
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      },
      async deletePaper({ commit }, paper) {
        try {
          const { data } = await this.$axios.delete(`/works/${paper.id}`);
          commit("DELETE_PAPER", paper);
          return paper;
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      },
      async editPaper({ commit }, editedPaper) {
        try {
          const formData = new FormData()
          Object.keys(editedPaper).forEach(key=>{
            const value = editedPaper[key]
            formData.append(key, value)
          })
          const { data } = await this.$axios.post(`/works/${editedPaper.id}`, formData);
          commit("EDIT_PAPER", data.work);
        } catch (error) {
          throw new Error(
            error.response.data.error || error.response.data.message
          );
        }
      },
      async fetchPapers({ commit }) {
        try {
          const { data } = await this.$axios.get("/works/284");
          commit("SET_PAPERS", data);
        } catch (error) {}
      }
    }
  };
  