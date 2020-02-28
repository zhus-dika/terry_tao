<template lang="pug">
    .container.nav__container
        ul.nav__list
            li.nav__item(v-for="tab in tabs")
                router-link(
                    :data-text="tab.title" 
                    :to="tab.href"
                    exact-active-class="active"
                ).nav__item-link {{tab.title}}
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      tabs: [
        { title: "About", href: "/" },
        { title: "Quotes", href: "/quotes" },
        { title: "Papers", href: "/papers" }
      ]
    };
  }
};
</script>