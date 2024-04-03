import { reactive } from "vue";
import axios from "axios";

export const state = reactive({
    message: 'this is a test message',
    characters: [],
    characters_api_url: 'https://rickandmortyapi.com/api/character',

    getCharacters(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                this.characters = response.data.results
            })
            .catch(err => {
                console.error(err.message);
            })
    },
    fetchCharacter(url) {
        axios.get(url)
            .then(response => {
                console.log(response.data.results);
                this.characters = response.data.results
            })
    },
})