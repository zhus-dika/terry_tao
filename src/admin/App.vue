<template lang="pug">
  h1 Welcome to the Vue App
    section.about
      .conatiner.about__container
        header.header
          .header.content
            .header__logo 
              img(src="../images/content/user.jpeg" class="header__logo-img")
            .header__title Terence Tao
            .header__quit-link
              a.quit-link(href="#") Quit
        nav.nav 
          - var navList = ["About", "Papers", "Quotes"];
            ul.nav__list
              each item in navList
                li.nav__item
                  a.nav__item-link(href='#') #{item}
        //-.about__content
          .section__title "About" block
          .add_group
            .add__icon  
            a.add-link(href='#') Add group
          .about__groups
            .new-group
              form.new-group__form(action='')
                .form__row
                  .form-input__wrapper
                    input.form-input(name='name' type='text' placeholder="Group's name")-//

        
</template>