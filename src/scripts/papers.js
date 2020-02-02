import Vue from "vue";

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
      return this.currentPaper.subjects;
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
    makeArrWithRequiredImages(data) {
      return data.map(item => {
        const requiredPic = require(`../images/content/${item.photo}`);
        item.photo = requiredPic;

        return item;
      });
    },
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
  created() {
    const data = require("../data/papers.json");
    this.papers = this.makeArrWithRequiredImages(data);
  }
});
