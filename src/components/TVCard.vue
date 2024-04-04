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
                        <div class="card-inner">
                            <div class="card-front">
                                <img v-if="tv.poster_path" :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`">
                                <div v-else class="fallback-cover">Cover not found</div>
                            </div>
                            <div class="card-back" :class="{ 'fallback-cover-back': !tv.poster_path }">
                                <ul>
                                    <li>Titolo:<br> <strong>{{ tv.name }}</strong></li>
                                    <li>Titolo Originale:<br> <strong>{{ tv.original_name }}</strong></li>
                                    <li>Lingua:
                                        <span :class="`fi fi-${getFlagCode(tv.original_language)}`"></span>
                                    </li>
                                    <li>Voto:
                                        <i v-for="n in 5" :key="n" class="fa-star"
                                            :class="{ 'fa-solid': n <= Math.round(tv.vote_average / 2), 'fa-regular': n > Math.round(tv.vote_average / 2) }"
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
<style scoped></style>