<script>
export default {
    data() {
        return {
            lang: ['it', 'en', 'fr', 'es', 'de', 'ja'],
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
        getVoteFrom1To5(vote) {
            const voteMaxFive = Math.round(this.card.vote_average / 2)
            return voteMaxFive
        },
        emptyStar(vote) {
            const emptyStars = 5 - vote;
            return emptyStars
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
        <img class="poster" v-if="card.poster_path" :src="`${images}${card.poster_path}`" alt="">
        <img class="image-not-available" v-else
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
            alt="">
        <div class="description">
            <h3><strong>Title:</strong> {{ getTitle() }}</h3>
            <p><strong>Original Title:</strong> {{ getOriginalTitle() }}</p>
            <p class="lang" v-if="hasFlag"><strong>Language:</strong><img class="flag"
                    :src="getImagePath(card.original_language)" alt=""></p>
            <p v-else><strong>Language:</strong> {{ card.original_language }}</p>
            <p><strong>Overview:</strong> {{ card.overview }}</p>
            <p><strong>Vote:</strong> <i v-for="vote in getVoteFrom1To5(card.vote_average)" class="fa-solid fa-star"
                    style="color: #ffbd00;"></i><i v-for="vote in emptyStar(getVoteFrom1To5(card.vote_average))"
                    class="fa-regular fa-star" style="color: #ffbd00;"></i></p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    margin-bottom: 4rem;
    border: 2px solid white;
    position: relative;

    .description {
        position: absolute;
        top: 60px;
        left: 20px;
        display: none;
    }

    h3,
    p {
        color: white;
        padding-top: .5rem;
    }

    .poster,
    .image-not-available {
        display: block;
        height: 513px;
    }

    .image-not-available {
        width: 342px;
    }

    .lang {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .flag {
        width: 40px;
    }

    &:hover {
        .description {
            display: block;
        }
        .poster, .image-not-available {
            filter: brightness(10%);
        }
    }

}</style>