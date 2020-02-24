<template lang="pug">
    .container.header__container
        .header__content
            .header__logo 
                img(src="../../images/content/user.jpeg" class="header__logo-img")
            .header__title Terence Tao
            .header__name Admin panel
        .header__quit-link
        a.quit-link(@click="logoutUser") Quit
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions("user", ["logout"]),
    logoutUser() {
      this.logout();
      this.$router.replace("/login");
    }
  }
};
</script>

