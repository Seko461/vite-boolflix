<script>
import MovieCard from './MovieCard.vue';
import TVCard from './TVCard.vue';
import Slider from './Slider.vue';
import { state } from '../state.js';


export default {
    name: 'AppMain',
    components: {
        MovieCard,
        TVCard,
        Slider,
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
    <Slider />
    <MovieCard :movie="movie" :key="movie.id" v-for="movie in state.movies" />
    <TVCard :tv="tv" :key="tv.id" v-for="tv in state.series" />
</template>
<style scoped></style>