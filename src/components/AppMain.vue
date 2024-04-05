<script>
import MovieCard from './MovieCard.vue';
import TVCard from './TVCard.vue';

import { state } from '../state.js';


export default {
    name: 'AppMain',
    components: {
        MovieCard,
        TVCard,

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
    <main>
        <div class="movies">
            <MovieCard :movie="movie" :key="movie.id" v-for="movie in state.movies" />
        </div>
        <div class="series">
            <TVCard :tv="tv" :key="tv.id" v-for="tv in state.series" />
        </div>
    </main>
</template>
<style scoped>
main {
    margin-top: 5rem;
    padding: 0 2rem;

    .movies {
        display: flex;

    }

    .series {
        display: flex;
    }
}

::-webkit-scrollbar {
    display: none;
}
</style>