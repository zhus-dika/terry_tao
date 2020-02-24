<template lang="pug">
  .login
    .login__content
      form(@submit.prevent="login").login__form
        .login__form-title Authorization
        .login__row
          app-input(
            title="Login"
            icon="user"
            v-model="user.name"
          )
        .login__row
          app-input(
            title="Password"
            icon="key"
            type="password"
            v-model="user.password"
          )
        .login__btn
          button(
            type="submit"
          ).login__send-data Send
</template>

<script>
import $axios from "../../requests";
export default {
  components: {
    appInput: () => import("../../components/input")
  },
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      try {
        const response = await $axios.post("/login",  this.user); 
        const token = response.data.token;

        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
        
      } catch (error) {
        
      }
    }
  }
};
</script>
<style lang="postcss">
@import "../../../styles/mixins.pcss";
.login {
  font-family: Alegreya Sans;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("../../../images/background/mountain_baloon-auth.png") center center / cover no-repeat;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.5;
    background: $text-color;
  }
}
.form-input__wrapper-login:before {
    opacity: .3;
    content: '';
    display: block;
    width: 30px;
    height: 30px;
    background: svg-load('user.svg', fill=rgba(65, 76, 99, .3);) center center no-repeat;
    background-size: cover;
    margin-right: 5%;
}
.form-input__wrapper-password:before {
    opacity: .3;
    content: '';
    display: block;
    width: 26px;
    height: 30px;
    background: svg-load('key-pswd.svg', fill=rgba(65, 76, 99, .3);) center center no-repeat;
    background-size: cover;
    margin-right: 5%;
}
.login__form-title {
  font-size: 36px;
  text-align: center;
  font-weight: 600;
}

.login__content {
  position: relative;

  @include phones {
    height: 100%;
    width: 100%;
  }
}

.login__row {
  margin-bottom: 35px;
  width: 20vw;
  margin: 0 auto;
  margin-bottom: 10%;
  @include tablets {
    width: 50vw;
  }
  @include phones {
    width: 72vw;
  }
}

.login__btn {
  display: flex;
  width: auto;
  padding: 0 8%;
  justify-content: center;
  @include phones{
    width: 75%;
  }
}

.login__send-data {
  width: 70%;
  padding: 30px;
  background-image: linear-gradient(to right, #ad00ed, #5500f2);
  border-radius: 40px 0 40px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 18px;
  @include phones{
    width: 75%;
  }
  &[disabled] {
    opacity: 0.5;
    filter: grayscale(100%);
  }
}
.login__form {
  width: 563px;
  height: 517px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 50px 77px 60px;
  background: #fff;
  @include tablets {
    width: 500px;
    height: 480px;
  }
  @include phones {
    width: 90vw;
    padding-right: 7%;
    padding-left: 7%;
    height: 87vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>