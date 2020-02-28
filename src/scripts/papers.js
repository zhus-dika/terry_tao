import Vue from "vue";
import axios from "axios";

const $axios = axios.create({
  baseURL: "https://webdev-api.loftschool.com/"
});
const thumbs = {
  template: "#slider-thumbs",
  props: {
    papers: Array,
    currentPaper: Object
  }
};

const btns = {
  template: "#slider-btns",
  props: {
    papers: Array,
    currentIndex: Number
  }
};

const display = {
  template: "#slider-display",
  components: {
    btns,
    thumbs
  },
  props: {
    papers: Array,
    currentPaper: Object,
    currentIndex: Number
  }
};

const tags = {
  template: "#slider-tags",
  props: {
    tagsArray: Array
  }
};

const info = {
  template: "#slider-info",
  components: {
    tags
  },
  props: {
    currentPaper: Object
  },
  computed: {
    tagsArray() {
      return this.currentPaper.techs.split(',');
    }
  }
};

new Vue({
  template: "#slider-container",
  el: "#slider-component",
  components: {
    display,
    info
  },
  data() {
    return {
      papers: [],
      currentIndex: 0
    };
  },
  computed: {
    currentPaper() {
      return this.papers[this.currentIndex];
    }
  },
  methods: {
    handleSlide(direction) {
      let lastIdx = this.papers.length - 1
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
  async created() {
    const { data } = await $axios.get("/works/284");
    this.papers = data;
    this.papers.map(item=>{
      item.photo = `https://webdev-api.loftschool.com/${item.photo}`
    })
  }
});
