import Vue from "vue";

const btns = {
  template: "#quotes-btns",
  props: {
    quotes: Array,
    currentIndex: Number
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
      currentIndex: Number    }
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
      currentIndex: 0
    };
  },
  computed: {
    currentQuote() {
      if (screen.width < 768){
        var str = this.quotes[this.currentIndex].text.split(".", 1)
        this.quotes[this.currentIndex].text = str[0]
      }
      return this.quotes[this.currentIndex];
    },
    secondQuote() {
      if (this.currentIndex + 1 !== this.quotes.length) {
        if (screen.width < 768){
          var str = this.quotes[this.currentIndex + 1].text.split(".", 1)
          this.quotes[this.currentIndex + 1].text = str[0]
        }
          return this.quotes[this.currentIndex + 1];
      }
      else
        return this.quotes[0];
    },
  },
  methods: {
    makeArrWithRequiredImages(data) {
        return data.map(item => {
          const requiredPic = require(`../images/content/${item.author_pic}`);
          item.author_pic = requiredPic;
          return item;
        });
      },
    handleSlide(direction) {
      let lastIdx = this.quotes.length - 2
      switch (direction) {
        case "next":
          if (this.currentIndex < lastIdx) this.currentIndex++;
          break;
        case "prev":
          if (this.currentIndex > 0) this.currentIndex--;
          break;
      }
    }
  },
  created() {
    const data = require("../data/quotes.json");
    this.quotes = this.makeArrWithRequiredImages(data);
  }
});
