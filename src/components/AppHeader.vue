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
        searchCharacter() {
            console.log('searching..' + this.searchText);
            this.state.fetchCharacter(`https://rickandmortyapi.com/api/character?name=${this.searchText}`)
        },

    },
    mounted() {
        console.log(this.state);
        this.state.getCharacters(this.state.characters_api_url)
    }
}
</script>
<template>
    <div class="search-box">
        <input type="text" v-model="searchText">
        <button @click="searchCharacter">Cerca</button>
    </div>
    <section class="characters">
        <div class="container">
            <div class="row">
                <div class="col" v-for="character in state.characters">
                    <div class="card">
                        <img :src="character.image" alt="">
                        <div>
                            {{ character.name }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style></style>