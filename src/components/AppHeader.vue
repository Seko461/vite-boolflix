<script>
import { state } from '../state.js'
export default {
    name: 'AppHeader',


    data() {
        return {
            state,
            searchText: '',


        }
    },
    methods: {
        searchMovie() {
            console.log(this.searchText);
            this.state.fetchMovies(`https://api.themoviedb.org/3/search/movie?query=${this.searchText}&api_key=fb4b99f70827322e7a475cfea2c111cc`)
        },

    },
    mounted() {
        console.log(this.state);
        this.state.getMovies(this.state.movies_api_url)
    }
}
</script>
<template>
    <div class="search-box">
        <input type="text" v-model="searchText">
        <button @click="searchMovie">Cerca</button>
    </div>
    <section class="movies">
        <div class="container">
            <div class="row">
                <div class="col" v-for="movie in state.movies">
                    <div class="card">

                        <div>
                            <h1> {{ movie.title }}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style></style>