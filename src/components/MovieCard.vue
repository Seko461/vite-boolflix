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
                        <div class="card-inner">
                            <div class="card-front">
                                <img v-if="movie.poster_path" :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`">
                                <div v-else class="fallback-cover ">Cover non disponibile</div>
                            </div>
                            <div class="card-back " :class="{ 'fallback-cover-back': !movie.poster_path }">
                                <ul>
                                    <li>Titolo:<br> <strong>{{ movie.title }}</strong></li>
                                    <li>Titolo Originale:<br> <strong>{{ movie.original_title }}</strong></li>
                                    <li>Lingua: <span :class="`fi fi-${getFlagCode(movie.original_language)}`"></span>
                                    </li>

                                    <li>Voto:
                                        <i v-for="n in 5" :key="n" class="fa-star"
                                            :class="{ 'fa-solid': n <= Math.round(movie.vote_average / 2), 'fa-regular': n > Math.round(movie.vote_average / 2) }"
                                            style="color: #ffff00;"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.card:hover {
    cursor: pointer;
    transform: rotateY(180deg);
    transition: all 3s;
}
</style>