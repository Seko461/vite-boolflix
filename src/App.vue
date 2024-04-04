<script >
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue';
import { state } from './state';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      state
    }
  },
  methods: {

    searchMovie() {
      state.fetchMovies(`https://api.themoviedb.org/3/search/movie?query=${state.searchText}&api_key=${state.api_Key}`);
      state.fetchSeries(`https://api.themoviedb.org/3/search/tv?query=${state.searchText}&api_key=${state.api_Key}`)
    },
  }
}
</script>

<template>
  <AppHeader @search="searchMovie" />
  <AppMain />
</template>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
