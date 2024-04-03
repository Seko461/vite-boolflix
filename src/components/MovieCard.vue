<script>
import { state } from '../state';
export default {
    name: 'MovieCard',
    props: ['movie'],
    data() {
        return {
            state
        }
    }
}
</script>
<template>
    <section class="movies">
        <div class="container">
            <div class="row">
                <div class="col" v-for="movie in state.movies">
                    <div class="card">

                        <div>
                            <h1> {{ movie.title }}</h1>
                            <h3>{{ movie.original_title }}</h3>
                            <h3>{{ movie.original_language }}</h3>
                            <h3>{{ movie.vote_average }}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style></style>