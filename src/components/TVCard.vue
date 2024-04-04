<script>

import { state } from '../state';
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default {
    name: 'TVCard',
    props: ['tv'],
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
    <section class="series">
        <div class="container">
            <div class="row">
                <div class="col" v-for="tv in state.series  ">
                    <div class="card" v-if="state.movies.length > 0">
                        <img v-if="tv.poster_path" :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`"
                            class="serie-poster">
                        <div>
                            <h1>Titolo: {{ tv.name }}</h1>
                            <h3>Titolo originale: {{ tv.original_name }}</h3>
                            <h3>Lingua: <span :class="`fi fi-${getFlagCode(tv.original_language)}`"></span></h3>
                            <h3>Voto: <i v-for="n in 5" :key="n" class="fa-star"
                                    :class="{ 'fa-solid': n <= Math.round(tv.vote_average / 2), 'fa-regular': n > Math.round(tv.vote_average / 2) }"
                                    style="color: #ffff00;"></i></h3>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.card {
    border: 1px solid black;
    border-radius: 1rem;
    background-color: rgb(255, 140, 0);
    padding: 0 1rem;
}
</style>