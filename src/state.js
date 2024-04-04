import { reactive } from "vue";
import axios from "axios";

export const state = reactive({

    api_Key: 'fb4b99f70827322e7a475cfea2c111cc',
    movies: [],
    series: [],
    searchText: '',
    movies_api_url: 'https://api.themoviedb.org/3/search/movie?api_key=fb4b99f70827322e7a475cfea2c111cc',
    series_api_url: 'https://api.themoviedb.org/3/search/tv?api_key=fb4b99f70827322e7a475cfea2c111cc',
    image_api_url: 'https://image.tmdb.org/t/p/w342',


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
    getSeries(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.series = response.data
            })
            .catch(err => {
                console.error(err.message);
            })
    },
    fetchSeries(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                this.series = response.data.results
            })
    },




})