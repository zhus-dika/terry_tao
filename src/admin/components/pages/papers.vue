<template lang="pug">
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
              .add-item__wrapper-button
                button.add-item(name="add-item")
                  .item__title Add paper
            .current-paper
              .current-paper__content
                .current-paper__photo
                  img(src="../../../images/content/sum_product.jpg" class="current-paper-img")
                .current-paper__description
                  .current-paper__title A sum-product estimate in finite fields, and applications
                  .current-paper__text Let A be a subset of a finite field $F := Z/qZ$ for some prime q. If |F|δ<|A|<|F|1−δ for some δ>0, then we prove the estimate $|A+A| + |A.A| geq c(delta) |A|^{1+eps}$ for some $eps = eps(delta) > 0$. This is a finite field analogue of a result of Erdos and Szemeredi. We then use this estimate to prove a Szemeredi-Trotter type theorem in finite fields, and obtain a new estimate for the Erdos distance problem in finite fields, as well as the three-dimensional Kakeya problem in finite fields.
                  .current-paper__link
                    a.current-paper__href(href= "https://arxiv.org/abs/math/0301343") https://arxiv.org/abs/math/0301343          
                  .buttons__wrapper
                    .button__wrapper
                      button.button__edit 
                        .button__name Edit
                    .button__wrapper
                      button.button__remove 
                        .button__name Remove
</template>