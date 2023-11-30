import { reactive } from "vue";

export const store = reactive({
    seriesList: [],
    filmsList: [],
    searchText: "",
    apiUrl: 'https://api.themoviedb.org/3',
    apiKey: 'e081cee5d1c0f1d058879e9c4b034a02',
    images: 'https://image.tmdb.org/t/p/w342',
    querySeries: '/search/tv',
    queryFilm: '/search/movie',
});