<script>
import MovieCard from './MovieCard.vue';
import { state } from '../state.js';

export default {
    name: 'AppMain',
    props: ['movie'],
    components: {
        MovieCard
    },
    data() {
        return {
            state,
            searchText: '',

        }
    },
    methods: {
        searchMovie() {
            console.log(this.searchText);
            this.state.fetchMovies(`https://api.themoviedb.org/3/search/movie?query=${this.searchText}&api_key=fb4b99f70827322e7a475cfea2c111cc`)
        },

    },
    mounted() {
        console.log(this.state);
        this.state.getMovies(this.state.movies_api_url)
    }
}
</script>
<template>
    <div class="search-box">
        <input type="text" v-model="searchText" @keyup.enter="searchMovie">
        <button @click="searchMovie">Cerca</button>
    </div>
    <MovieCard :movie="movie" :key="movie.id" v-for="movie in state.movies" />
</template>
<style></style>