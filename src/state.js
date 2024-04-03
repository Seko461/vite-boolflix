import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    message: 'this is a test message',
    movies: [],
    movies_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=fb4b99f70827322e7a475cfea2c111cc',



    getMovies(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.movies = response.data
            })
            .catch(err => {
                console.error(err.message);
            })
    },
    fetchMovies(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                this.movies = response.data.results
            })
    },
})