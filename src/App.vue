<script>
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import axios from 'axios';
import { store } from './store/store';


export default {
    components: {
        HeaderComponent,
        MainComponent
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
            })
        }
    },
    mounted () {
        this.getFilm();
    },
};
</script>

<template>
    <HeaderComponent />
    <MainComponent />
</template>

<style scoped>

</style>
