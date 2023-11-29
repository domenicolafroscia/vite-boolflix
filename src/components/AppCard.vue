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
        getImagePath(img) {
            return new URL(`../assets/img/${img}.jpg`, import.meta.url).href;
        },
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
        getVoteFrom1To5() {
            return Math.round(this.card.vote_average / 2)
        },
    },
};
</script>

<template>
    <div class="card">
        <img :src="`${images}${card.poster_path}`" alt="">
        <h3>{{ getTitle() }}</h3>
        <p>{{ getOriginalTitle() }}</p>
        <img v-if="lang.includes(card.original_language)" class="flag" :src="getImagePath(card.original_language)" alt="">
        <p v-else>{{ card.original_language }}</p>
        <p>{{ getVoteFrom1To5() }}</p>
    </div>
</template>

<style lang="scss" scoped>
// 342 513
.card {
    margin-bottom: 4rem;

    .flag {
        width: 30px;
        height: 15px;
    }
}
</style>