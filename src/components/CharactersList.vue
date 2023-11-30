<script>
import AppCard from './AppCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };
    },
    components: {
        AppCard,
    },
};
</script>

<template>
    <div class="container">
        <div v-if="store.filmsList.length > 0 && store.seriesList.length > 0">
            <div class="film">
                <h2>Film</h2>
                <div class="row">
                    <div class="col" v-for="film in store.filmsList" :key="film.id">
                        <AppCard :card="film" :images="store.images" />
                    </div>
                </div>
            </div>
            <div class="series">
                <h2>Series</h2>
                <div class="row">
                    <div class="col" v-for="series in store.seriesList">
                        <AppCard :card="series" :images="store.images" />
                    </div>
                </div>
            </div>
        </div>
        <h3 v-else>Nessun risultato trovato</h3>

    </div>
</template>

<style scoped lang="scss">
.container {
    background-color: #434343;

    h2 {
        padding: 5rem;
        text-align: center;
        color: red;
        font-size: 3rem;
    }

    .row {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 3rem;

    }

}
</style>