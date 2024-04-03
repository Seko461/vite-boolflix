<script>
import MovieCard from './MovieCard.vue';
import TVCard from './TVCard.vue';
import { state } from '../state.js';


export default {
    name: 'AppMain',
    props: ['movie'],
    components: {
        MovieCard,
        TVCard
    },
    data() {
        return {
            state,
            searchText: '',

        }
    },
    methods: {
        searchMovie() {
            state.movies = [];
            state.series = [];
            console.log(this.searchText);
            this.state.fetchMovies(`https://api.themoviedb.org/3/search/movie?query=${this.searchText}&api_key=fb4b99f70827322e7a475cfea2c111cc`);
            this.state.fetchSeries(`https://api.themoviedb.org/3/search/tv?query=${this.searchText}&api_key=fb4b99f70827322e7a475cfea2c111cc`)
        },


    },
    mounted() {
        console.log(this.state);
        this.state.getMovies(this.state.movies_api_url)
        this.state.getSeries(this.state.series_api_url)
    }
}
</script>
<template>
    <div class="search-box">
        <input type="text" v-model="searchText" @keyup.enter="searchMovie">
        <button @click="searchMovie">Cerca</button>
    </div>
    <MovieCard :movie="movie" :key="movie.id" v-for="movie in state.movies" />
    <TVCard :tv="tv" :key="tv.id" v-for="tv in state.series" />
</template>
<style></style>