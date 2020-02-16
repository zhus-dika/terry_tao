<template lang="pug">
  .wrapper
    header.header
      app-header
    nav.nav 
      tabs
    main.content-container
      router-view   
</template>
<script>
export default {
  components: {
    appHeader: () => import("./components/header"),
    tabs: () => import("./components/tabs")
  }
};
</script>
<style lang="postcss">
@import "../styles/layout/*.pcss";
@import "./styles/fonts.pcss";
@import "./styles/*.pcss";
.wrapper{
  background: url('../images/background/Mountain_Baloon.png');
  background-size: cover;
}
.content-container {
  padding: 4%;
}
</style>