import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});
const btns = {
  template: "#quotes-btns",
  props: {
    quotes: Array,
    currentIndex: Number,
    isMobile: Boolean
  }
};
const display = {
    template: "#quotes-display",
    components: {
      btns
    },
    props: {
      quotes: Array,
      currentQuote: Object,
      currentIndex: Number,
      isMobile: Boolean   
    }
  };
const info = {
  template: "#quotes-info",
  props: {
    currentQuote: Object,
    secondQuote: Object
  }
};

new Vue({
  template: "#quotes-container",
  el: "#quotes-component",
  components: {
    display,
    info
  },
  data() {
    return {
      quotes: [],
      currentIndex: 0,
      isMobile: false
    };
  },
  computed: {
    currentQuote() {
      if (screen.width < 1200){
        var str = this.quotes[this.currentIndex].text.slice(0, 700)
        this.quotes[this.currentIndex].text = str
      }
      return this.quotes[this.currentIndex];
    },
    secondQuote() {
      if (this.currentIndex + 1 !== this.quotes.length) {
        if (screen.width < 1200){
          var str = this.quotes[this.currentIndex + 1].text.slice(0, 700)
          this.quotes[this.currentIndex + 1].text = str
        }
          return this.quotes[this.currentIndex + 1];
      }
      else
        return this.quotes[this.currentIndex];
    },
  },
  methods: {
    handleSlide(direction) {
      let lastIdx = this.quotes.length - 2
      if (screen.width < 768) this.isMobile = true
      switch (direction) {
        case "next":
          if (this.currentIndex < lastIdx || this.isMobile && this.currentIndex === lastIdx) this.currentIndex++; 
          break;
        case "prev":
          if (this.currentIndex > 0) this.currentIndex--;
          break;
      }
    }
  },
  async created() {
    const { data } = await $axios.get("/reviews/284");
    this.quotes = data;
    this.quotes.map(item=>{
      item.photo = `https://webdev-api.loftschool.com/${item.photo}`
    })
  }
});
