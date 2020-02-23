<template lang="pug">
    ul.tags__list
        li.current-tags__item(v-for="(tagItem, idx) in tags" :key="tagItem" v-if="tagItem")
            paper-tags-item(
                :tagItem="tagItem"
                :idx="idx"
                @resetTag="resetTag"
            )

</template>
<script>
export default {
    components: {
        paperTagsItem: () => import("./paper-tags-item")
    },
    computed: {
        tags: function(){
            return this.paperTags.split(', ')
        }
    },
    props: {
        paperTags: {
            type: String
        }
    },
    methods: {
        resetTag(data) {
            this.$emit('updateTags',{
                updatedTags: data.deletedTag,
                id: data.id
            })
        }
    }
};
</script>