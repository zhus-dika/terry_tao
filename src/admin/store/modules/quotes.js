export default {
  namespaced: true,
  state: {
    quotes: []
  },
  mutations: {
    SET_QUOTES: (state, data) => (state.quotes = data),
    ADD_QUOTE: (state, quote) => state.quotes.push(quote),
    DELETE_QUOTE: (state, deletedQuote) => {
      state.quotes = state.quotes.filter(
        quote => quote.id !== deletedQuote.id
        )
    },
    EDIT_QUOTE: (state, editedQuote) => {
      state.quotes = state.quotes.map(quote => {
        if (editedQuote.id === quote.id) {
          quote = editedQuote
        }
        return quote
      })
    }
  },
  actions: {
    async addQuote({ commit }, quote) {
      const formData = new FormData()
      Object.keys(quote).forEach(key=>{
        const value = quote[key]
        formData.append(key, value)
      })
      try {
        const { data } = await this.$axios.post("/reviews", formData);
        commit("ADD_QUOTE", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async deleteQuote({ commit }, quote) {
      try {
        const { data } = await this.$axios.delete(`/reviews/${quote.id}`);
        commit("DELETE_QUOTE", quote);
        return quote;
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async editQuote({ commit }, editedQuote) {
      try {
        const formData = new FormData()
        Object.keys(editedQuote).forEach(key=>{
          const value = editedQuote[key]
          formData.append(key, value)
        })
        const { data } = await this.$axios.post(`/reviews/${editedQuote.id}`, formData);
        commit("EDIT_QUOTE", data.review);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async fetchQuotes({ commit }) {
      try {
        const { data } = await this.$axios.get("/reviews/284");
        commit("SET_QUOTES", data);
      } catch (error) {}
    }
  }
};
