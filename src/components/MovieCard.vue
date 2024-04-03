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
                <div class="col" v-for="movie in   state.movies  ">
                    <div class="card">

                        <div>
                            <h1>Titolo: {{ movie.title }}</h1>
                            <h3>Titolo originale: {{ movie.original_title }}</h3>
                            <h3>Lingua: <span :class="`fi fi-${getFlagCode(movie.original_language)}`"></span></h3>
                            <h3>Voto: {{ movie.vote_average }}</h3>
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