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
                <div class="col">
                    <div class="card" v-if="state.movies.length > 0">
                        <div class="card-inner">
                            <div class="card-front">
                                <img v-if="tv.poster_path" :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`">
                                <div v-else class="fallback-cover">
                                    <h3>Cover not found</h3>
                                </div>
                            </div>
                            <div class="card-back" :class="{ 'fallback-cover-back': !tv.poster_path }">
                                <ul>
                                    <li>Titolo<br> <strong>{{ tv.name }}</strong></li>
                                    <li>Titolo Originale<br> <strong>{{ tv.original_name }}</strong></li>
                                    <li>Lingua:
                                        <span :class="`fi fi-${getFlagCode(tv.original_language)}`"></span>
                                    </li>
                                    <li>Voto:
                                        <i v-for="n in 5" :key="n" class="fa-star"
                                            :class="{ 'fa-solid': n <= Math.round(tv.vote_average / 2), 'fa-regular': n > Math.round(tv.vote_average / 2) }"
                                            style="color: #ffff00;"></i>
                                    </li>
                                    <li>
                                        Info <br> {{ tv.overview }}
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
.card {

    color: white;
    /* border: 1px solid red; */
    width: 22rem;
    object-fit: cover;
    height: 32rem;
    margin-bottom: 3rem;
    overflow: hidden;
    text-align: center;
    position: relative;
    transition: transform 1s;
    transform-style: preserve-3d;
    align-self: center;
}

.card:hover {
    transform: rotateY(180deg);

    filter: drop-shadow(0 0 20px rgba(202, 202, 202, 0.5));
    cursor: pointer;
}

.card:hover .card-front>img {
    filter: brightness(0%);
}



.card-back {
    position: absolute;
    top: 5rem;
    transform: rotateY(180deg);
    width: 100%;
    height: 100%;
    visibility: hidden;
    overflow-wrap: break-word;


}

.card:hover .card-back {
    visibility: visible;
    transition: 1.5s;

}

ul {
    list-style: none;
}

li {
    margin: 1rem;
}

.fallback-cover {
    display: flex;
    align-items: center;
    justify-content: center;
}

.fallback-cover:hover {
    filter: brightness(0%);
}


.fallback-cover-back {
    color: white;
    font-size: 18px;
    padding-bottom: 350px;
    background-color: rgb(255, 66, 66);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>