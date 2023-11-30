<script>
export default {
    data() {
        return {
            lang: ['it', 'en', 'fr', 'es', 'de', 'ja']
        };
    },
    props: {
        card: Object,
        images: String
    },
    methods: {
        getTitle() {
            let title = '';
            if (this.card.title) {
                title = this.card.title;
            } else {
                title = this.card.name;
            };
            return title;
        },
        getOriginalTitle() {
            let originalTitle = '';
            if (this.card.original_title) {
                originalTitle = this.card.original_title;
            } else {
                originalTitle = this.card.original_name;
            };
            return originalTitle;
        },
        getImagePath(img) {
            return new URL(`../assets/img/${img}.jpg`, import.meta.url).href;
        },
        getVoteFrom1To5() {
            return Math.round(this.card.vote_average / 2)
        },
    },
    computed: {
        hasFlag() {
            return this.lang.includes(this.card.original_language);
        },
    },
};
</script>

<template>
    <div class="card">
        <img :src="`${images}${card.poster_path}`" alt="">
        <h3>{{ getTitle() }}</h3>
        <p>{{ getOriginalTitle() }}</p>
        <img v-if="hasFlag" class="flag" :src="getImagePath(card.original_language)" alt="">
        <p v-else>{{ card.original_language }}</p>
        <p>{{ getVoteFrom1To5() }}</p>
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin-bottom: 4rem;

    .flag {
        width: 40px;
    }
}
</style>