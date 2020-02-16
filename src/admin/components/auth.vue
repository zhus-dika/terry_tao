<template lang="pug">
    .authorization
      .auth__wrapper
        .auth__window
          h2.auth__header Authorization
          button.close-window
          script(type='text/x-template')#form-login
            form.auth__form(@submit.prevent="login")
              label.form__block(for='') 
                .form-label Login
                .form-input__wrapper-login
                  input.auth__form-input(name='auth' type='login' placeholder="terry_tao" required)
              label.form__block(for='') 
                .form-label Password
                .form-input__wrapper-password
                  input.auth__form-input(name='password' type='password' placeholder="*******" required)
              .auth__form-button__wrapper
                input.auth__form-button(type='submit') 
</template>