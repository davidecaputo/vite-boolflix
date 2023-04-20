<script>
import HeaderComponent from './components/HeaderComponent.vue';
import PrintCards from './components/PrintCards.vue';
import axios from 'axios';
import { store } from './store/store';


export default {
    components: {
        HeaderComponent,
        PrintCards
    },
    data() {
        return {
            store
        }
    },
    methods: {
        getFilm() {
            const urlFilm = store.baseUrl + store.endpoint.film;
            const options = {
                params: store.params
            }
            axios.get(urlFilm, options).then((el) => {
                console.log(el.data.results);
                store.film = el.data.results
            })
        }
    },
    mounted () {
        this.getFilm();
    },
};
</script>

<template>
    <HeaderComponent @search-text="getFilm" />
    <main class="p-5">
        <PrintCards />
    </main>
</template>

<style scoped>
    main{
        width: 100%;
        height: calc(100vh - 100px);
        background-color: lightgray;
    }
</style>
