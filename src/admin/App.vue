<template lang="pug">
  section.about
    header.header
      .container.header__container
          .header__content
            .header__logo 
              img(src="../images/content/user.jpeg" class="header__logo-img")
            .header__title Terence Tao
            .header__name Admin panel
          .header__quit-link
            a.quit-link(href="#") Quit
    nav.nav 
      .container.nav__container
        - var navList = ["About", "Papers", "Quotes"]
          ul.nav__list
            each item in navList
              if (item === "About")
                li.nav__item.active
                  a.nav__item-link(href='#') #{item}
              else 
                li.nav__item
                  a.nav__item-link(href='#') #{item}
    .container.about__container
      .about__content
        .content-header
          .section__title "About" block
          .add-group
            .add-group__wrapper
              button.add-group__icon(name='add-group__icon')
            button.add-group__button(name='add-group__button') Add group
        .about__groups
          .group
            form.group__form(action='')
              .form-input__group
                input.form-input__group-name(name='group' type='text' placeholder="Group's name" required)
                .form-group__buttons
                  input.form-button__submit(type='submit') 
                  input.form-button__reset(type='reset') 
              .form-input__new-skill  
                input.form-input__skill-name(name='skill-name' type='text' placeholder="New skill" required) 
                .form__skill-value
                  input.form-input__skill-value(name='skill-value' type='number' value="100") 
                  .percent-icon %
                .form-button__add__wrapper
                  button.form-button__add(name='add-skill') 
          .group
            form.group__form.full(action='')
              .form-input__group
                input.form-input__group-name(name='group' type='text' value="Known for")
                .form-group__buttons
                  input.form-button__submit(name='submit') 
                  input.form-button__reset(name='reset' type='reset') 
              .form-input__current-points
                - var points = ["Green-Tao theorem", "Erdos discrepancy problem", "Compressed sensing", "Tao's inequality"]
                - var skillValues = [30, 50, 30, 100]
                  ul.current-points__list
                    each item, idx in points
                      li.current-points__item
                        input.form-input__skill(name='group' type='text' value=item required)
                        .form__skill-value
                          input.form-input__skill-value(name='skill-value' type='number' value=skillValues[idx] required) 
                          .percent-icon %
                        .form-group__buttons
                          .form-button__edit 
                          input.form-button__delete(name='delete')
                .form-input__new-skill  
                  input.form-input__skill-name(name='skill-name' type='text' placeholder="New skill" required) 
                  .form__skill-value
                    input.form-input__skill-value(name='skill-value' type='number' value="100") 
                    .percent-icon %
                  .form-button__add__wrapper
                    button.form-button__add(name='add-skill' placeholder="New skill" type='submit')
    .papers
      .container.papers__container
        .edit__paper-wrapper
          .form__title Edit paper
          .edit__paper
            .upload-block
              .paper__photo
                .upload-text Drag or drop to upload image
                .upload-photo__wrapper
                  button.upload-photo Upload
            .form__wrapper
              form.paper-edit__form(action='')
                label.form__block(for='')
                  .form-label.first Name
                  input.form-input__paper(name='paper-name' type='text' value="A sum-product estimate in finite fields, and applications" required) 
                label.form__block(for='')
                  .form-label Link
                  input.form-input__paper(name='paper-link' type='text' value="https://arxiv.org/abs/math/0301343" required) 
                label.form__block(for='')
                  .form-label Description
                  textarea.form-input__paper(name='paper-desc' type='text' placeholder="Let A be a subset of a finite field $F := Z/qZ$ for some prime q. If |F|δ<|A|<|F|1−δ for some δ>0, then we prove the estimate $|A+A| + |A.A| geq c(delta) |A|^{1+eps}$ for some $eps = eps(delta) > 0$. This is a finite field analogue of a result of Erdos and Szemeredi. We then use this estimate to prove a Szemeredi-Trotter type theorem in finite fields, and obtain a new estimate for the Erdos distance problem in finite fields, as well as the three-dimensional Kakeya problem in finite fields." rows="3" cols = "43")
                label.form__block(for='')
                  .form-label Add tag
                  input.form-input__paper(name='paper-add_tag' type='text' value="Combinatorics (math.CO), Number Theory (math.NT)" required) 
                .current-tags
                  - var tags = ["Combinatorics (math.CO)", "Number Theory (math.NT)"]
                    ul.tags__list
                      each item in tags
                        li.current-tags__item 
                          .current-tag__value #{item}
                          button.current-tag__reset(name="tag__reset")
                .form__buttons
                  button.form__button-cancel(type='reset') Cancel
                  button.form__button-save(type='submit') Save
        .papers__current 
          .papers__list
            .new-paper
              .add-paper__wrapper
                button.add-paper(name="add-paper")
              .paper__title Add paper
            .current-paper
              .current-paper__content
                .current-paper__photo
                  img(src="../images/content/sum_product.jpg" class="current-paper-img")
                .current-paper__description
                  .current-paper__title A sum-product estimate in finite fields, and applications
                  .current-paper__text Let A be a subset of a finite field $F := Z/qZ$ for some prime q. If |F|δ<|A|<|F|1−δ for some δ>0, then we prove the estimate $|A+A| + |A.A| geq c(delta) |A|^{1+eps}$ for some $eps = eps(delta) > 0$. This is a finite field analogue of a result of Erdos and Szemeredi. We then use this estimate to prove a Szemeredi-Trotter type theorem in finite fields, and obtain a new estimate for the Erdos distance problem in finite fields, as well as the three-dimensional Kakeya problem in finite fields.
                  .current-paper__link
                    a.current-paper__href(href= "https://arxiv.org/abs/math/0301343") https://arxiv.org/abs/math/0301343          
                  .current-paper__buttons
                    .current-paper__edit-content
                      .button__name Edit
                      .current-paper__wrapper
                        button.current-paper__edit
                    .current-paper__remove-content
                      .button__name Remove
                      .current-paper__wrapper
                        button.current-paper__remove
    .quotes
      .container.quotes__container
        .add__quote-wrapper
          .form__title New quote
          .quote__container
            .add__quote
              .quote__author-img 
              .new-quote__text 
                button.add__photo(name='add__photo') Add photo
            .quote-form__wrapper
              form.quote-form
                .form__rows
                  .form__row
                    label.form__block(for='')
                      .form-label Author's name
                      input.form-input__quote(name='author-name' type='text' placeholder="Albert Einstein" required) 
                    label.form__block(for='')
                      .form-label Author's occupation
                      input.form-input__quote(name='author-occ' type='text' placeholder="Great scientist" required) 
                  .form__row
                    label.form__block(for='')
                      .form-label Quote
                      textarea.form-input__quote(name='quote' type='text' placeholder="I believe in intuitions and inspirations. I sometimes feel that I am right. I do not know that I am." rows="3" cols = "43" required)
                .form__buttons
                  input.form__button-cancel(type='reset' value='Cancel')
                  input.form__button-save(type='submit' value='Save')
        .quotes__list
          .new-quote
            .add-quote__wrapper-button
              button.add-quote(name="add-quote")
            .quote__title Add quote
          .current-quote
            .current-quote__content
              .quote__author-content
                .quote__author-photo
                  img(src="../images/content/timothy.jpeg" class="quote__author-img")
                .quote__author-text
                  .quote__author-name Timothy Gowers
                  .quote__author-occupation British mathematician
              .quote__content-text Tao's mathematical knowledge has an extraordinary combination of breadth and depth: he can write confidently and authoritatively on topics as diverse as partial differential equations, analytic number theory, the geometry of 3-manifolds, nonstandard analysis, group theory, model theory, quantum mechanics, probability, ergodic theory, combinatorics, harmonic analysis, image processing, functional analysis, and many others. Some of these are areas to which he has made fundamental contributions.
              .current-paper__buttons
                .current-paper__edit-content
                  .button__name Edit
                  .current-paper__wrapper
                    button.current-paper__edit
                .current-paper__remove-content
                  .button__name Remove
                  .current-paper__wrapper
                    button.current-paper__remove
          
                 


          
          

</template>

<style lang="postcss">
@import "../styles/layout/*.pcss";
@import "./styles/fonts.pcss";
@import "./styles/*.pcss";

</style>