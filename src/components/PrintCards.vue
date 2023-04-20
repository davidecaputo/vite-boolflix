<template>
    <h2>Film:</h2>
    <div v-for="(film, index) of store.film" :key="index">
        <span>{{ film.title }} - {{ film.original_title }} - {{ film.original_language }} - {{ film.vote_average }}</span>
    </div>
</template>

<script>
import { store } from '../store/store';

    export default {
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>