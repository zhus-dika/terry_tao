<template lang="pug">
    .quotes
      .container.quotes__container
        .add__quote-wrapper
          .form__title New quote
          .quote__container
            .add__quote
              .quote__author-img 
              .new-quote__text 
                .add__photo-wrapper
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
            .add-item__wrapper-button
              button.add-item(name="add-item")
                .item__title Add quote
          .current-quote
            .current-quote__content
              .quote__author-content
                .quote__author-photo
                  img(src="../../../images/content/timothy.jpeg" class="quote__author-img")
                .quote__author-text
                  .quote__author-name Timothy Gowers
                  .quote__author-occupation British mathematician
              .quote__content-text Tao's mathematical knowledge has an extraordinary combination of breadth and depth: he can write confidently and authoritatively on topics as diverse as partial differential equations, analytic number theory, the geometry of 3-manifolds, nonstandard analysis, group theory, model theory, quantum mechanics, probability, ergodic theory, combinatorics, harmonic analysis, image processing, functional analysis, and many others. Some of these are areas to which he has made fundamental contributions.
              .buttons__wrapper
                .button__wrapper
                  button.button__edit 
                    .button__name Edit
                .button__wrapper
                  button.button__remove 
                    .button__name Remove
</template>