<template lang="pug">
    .current-quote__content
        .quote__author-content
            .quote__author-photo
                img(src="../../images/content/timothy.jpeg" class="quote__author-img")
            .quote__author-text
                .quote__author-name Timothy Gowers
                .quote__author-occupation British mathematician
        .quote__content-text Tao's mathematical knowledge has an extraordinary combination of breadth and depth: he can write confidently and authoritatively on topics as diverse as partial differential equations, analytic number theory, the geometry of 3-manifolds, nonstandard analysis, group theory, model theory, quantum mechanics, probability, ergodic theory, combinatorics, harmonic analysis, image processing, functional analysis, and many others. Some of these are areas to which he has made fundamental contributions.
        .buttons__wrapper
            .button__wrapper
                button.button__edit 
                    .button__name Edit
            .button__wrapper
                button.button__remove 
                    .button__name Remove
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data () {
    return {
      createdmode: false
    }
  },
  props: {
      quote: {
          type: Object
      }
  },
  computed : {
    ...mapState("quotes", {
      quotes: state => {
        return state.quotes
      }
    })
  },
  created() {
    this.fetchQuotes()
  },
  methods: {
    ...mapActions("quotes", ["fetchQuotes"])
  }
};
</script>