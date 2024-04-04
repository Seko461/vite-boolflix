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


        }
    },
    methods: {


    },

}
</script>
<template>
    <MovieCard :movie="movie" :key="movie.id" v-for="movie in state.movies" />
    <TVCard :tv="tv" :key="tv.id" v-for="tv in state.series" />
</template>
<style></style>