<template>
    <header>
        <div class="d-flex justify-content-between align-items-center h-100 px-4">
            <h1>Netflix</h1>
            <form class="d-flex gap-2" @submit.prevent="$emit('searchText')">
                <input type="text" name="contentSearch" id="contentSearch" class="form-control bg-black rounded-5 text-white" placeholder="Film, serie TV, generi" @keyup.enter.self="$emit('searchText')" v-model="store.params.query">
                <button type="submit" class="btn btn-success">Ricerca</button>
            </form>
        </div>
    </header>
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
    header{
        width: 100%;
        height: 100px;
        background-color: black;
        h1{
            color: red;
        }
    }
</style>