<template lang="pug">
  .about
    .container.about__container
      .about__content
        .content-header
          .section__title "About" block
          .add-group
            .add-group__wrapper
              button.add-group__button(name='add-group__button') Add group
                .add-group__icon
        .about__groups
          .group
            form.group__form(action='')
              .form-input__group
                input.form-input__group-name(name='group' type='text' placeholder="Group's name" required)
                .form-group__buttons
                  .form-button__submit__wrapper
                    input.form-button__submit(type='submit') 
                  .form-button__reset__wrapper
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
                  .form-button__submit__wrapper
                    input.form-button__submit(type='submit') 
                  .form-button__reset__wrapper
                    input.form-button__reset(type='reset')  
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
                          .form-button__edit__wrapper
                            button.form-button__edit(name='edit')
                          .form-button__delete__wrapper
                            button.form-button__delete(name='delete')
                .form-input__new-skill  
                  input.form-input__skill-name(name='skill-name' type='text' placeholder="New skill" required) 
                  .form__skill-value
                    input.form-input__skill-value(name='skill-value' type='number' value="100") 
                    .percent-icon %
                  .form-button__add__wrapper
                    button.form-button__add(name='add-skill' placeholder="New skill" type='submit')
</template>