<template lang="pug">
    li.current-tags__item 
        .current-tag__value {{tagItem}}
        button.current-tag__reset(name="tag__reset" @click.prevent="resetTag")
</template>
<script>
export default {
    props: {
        tagItem: {
            type: String
        },
        idx: Number
    },
    methods:{
        resetTag() {
            this.$emit("resetTag",{
                deletedTag: this.tagItem,
                id: this.idx
            })
        }
    }
};
</script>