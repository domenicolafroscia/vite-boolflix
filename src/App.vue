<script>
import axios from "axios";
import AppHeader from "./components/AppHeader.vue";
import { store } from "./store.js";
import CharactersList from "./components/CharactersList.vue";

export default {
  data() {
    return {
      store,
    };
  },
  components: {
    AppHeader,
    CharactersList
},
  methods: {
    handleClick() {
      axios
        .get(this.store.apiUrl + this.store.queryFilm, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey
          }
        })
        .then((resp) => {
          this.store.filmsList = resp.data.results;
        });

      axios
        .get(this.store.apiUrl + this.store.querySeries, {
          params: {
            query: this.store.searchText,
            api_key: this.store.apiKey
          }
        })
        .then((resp) => {
          this.store.seriesList = resp.data.results;
        })
    },
  },
};


</script>

<template>
  <AppHeader @btn-click="handleClick" />
  <CharactersList />
</template>

<style lang="scss">
@use "./style/general.scss";
@import '@fortawesome/fontawesome-free/css/all.css';
</style>
