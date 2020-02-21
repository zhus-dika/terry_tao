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
          quote.title = editedQuote.title
        }
        return quote
      })
    }
  },
  actions: {
    async addQuote({ commit }, quote) {
      try {
        const { data } = await this.$axios.post("/reviews", quote);
        commit("ADD_QUOTE", data);
        return data;
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
        const { data } = await this.$axios.post(`/reviews/${editedQuote.id}`, editedQuote);
        commit("EDIT_QUOTE", data);
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
