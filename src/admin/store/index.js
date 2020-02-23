import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import categories from "./modules/categories";
import skills from "./modules/skills";
import quotes from "./modules/quotes";
import papers from "./modules/papers";
export default new Vuex.Store({
  modules: {
    categories,
    skills,
    quotes,
    papers
  }
});
