<template lang="pug">
        li.current-paper
            .current-paper__content
                .current-paper__photo
                    img(src="../../images/content/sum_product.jpg" class="current-paper-img")
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