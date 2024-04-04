<script>

import { state } from '../state';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    name: 'MovieCard',
    props: ['movie'],
    data() {
        return {
            state,

        }
    },
    methods: {
        getFlagCode(language) {
            switch (language) {
                case 'en':
                    return 'gb';
                case 'us':
                    return 'us';
                case 'zh':
                    return 'cn';
                case 'ja':
                    return 'jp';
                case 'ka':
                    return 'ge';
                case 'da':
                    return 'dk';
                default:
                    return language;
            }
        }
    }
}
</script>
<template>
    <section class="movies">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="card" v-if="state.movies.length > 0">
                        <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`">
                        <div>
                            <h1>Titolo: {{ movie.title }}</h1>
                            <h3>Titolo originale: {{ movie.original_title }}</h3>
                            <h3>Lingua: <span :class="`fi fi-${getFlagCode(movie.original_language)}`"></span></h3>
                            <h3>Voto: <i v-for="n in 5" :key="n" class="fa-star"
                                    :class="{ 'fa-solid': n <= Math.round(movie.vote_average / 2), 'fa-regular': n > Math.round(movie.vote_average / 2) }"
                                    style="color: #ffff00;"></i></h3>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style>
.card {
    border: 1px solid black;
    border-radius: 1rem;
    background-color: bisque;
    padding: 0 1rem;
}
</style>