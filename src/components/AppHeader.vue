<script>
import { state } from '../state.js'
export default {
    name: 'AppHeader',


    data() {
        return {
            state,


        }
    },

}
</script>
<template>
    <nav>
        <img src="../../public/logo.194ab379.png" alt="">
        <div class="search-box">
            <input type="text" v-model="state.searchText" @keyup.enter="$emit('search')" placeholder="Titoli">
            <button @click="$emit('search')"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </nav>
</template>
<style scoped>
nav {
    border: 1px solid black;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 999;

    >img {
        width: 6rem;
    }
}

.search-box {
    >input {
        padding: 0 .5rem;
        height: 2rem;
        background-color: rgb(205, 205, 205);
        color: black;
        outline: none;
        margin-right: .5rem;
    }

    >button {
        font-size: 1.5rem;
        background-color: transparent;
        color: white;
        border: none;
        transform: translateY(.25rem);

    }

    >button:hover {
        cursor: pointer;
    }
}
</style>