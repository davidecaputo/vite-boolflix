<template>
    <h2 class="pb-4">Film:</h2>
    <div class="row">
        <div v-for="(film, index) of store.film" :key="film.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card dc-card w-100 h-100">
                <img :src="store.imageUrl + film.poster_path" alt="" v-if="film.poster_path">
                <img src="https://www.cuneo24.it/photogallery_new/images/2018/07/cinema-film-generica-4657.660x368.jpg" alt="" v-else>
                <div class="card-body dc-card-body">
                    <h2>{{ film.title }}</h2>
                    <p>{{ film.original_title }}</p>
                    <p class="fi" :class="(film.original_language === 'en')?'fi-us' : 'fi-' + film.original_language"></p>
                    <p>{{ film.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>
    <h2 class="pb-4">Serie TV:</h2>
    <div class="row">
        <div v-for="(serie, index) of store.serieTv" :key="serie.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="card dc-card w-100 h-100">
                <img :src="store.imageUrl + serie.poster_path" alt="" v-if="serie.poster_path">
                <img src="https://www.cuneo24.it/photogallery_new/images/2018/07/cinema-film-generica-4657.660x368.jpg" alt="" v-else>
                <div class="card-body dc-card-body">
                    <h4>{{ serie.name }}</h4>
                    <p>{{ serie.original_title }}</p>
                    <p class="fi" :class="(serie.original_language === 'en')?'fi-us' : 'fi-' + serie.original_language"></p>
                    <p>{{ serie.vote_average }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { store } from '../store/store';
import "/node_modules/flag-icons/css/flag-icons.min.css";

    export default {
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped>
    .dc-card{
        & img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        &:hover{
            transform: rotateY(360deg);
            box-shadow: 4px 4px 20px 10px;
            transition: 2s;
        }
        &:not( :hover ){
            transition: 1s;
        }
        & .dc-card-body{
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            color: white;
        }
        & .dc-card-body:hover{
            opacity: 1;
            background-color: #181818;
            transition: 1s;
        }
    }
</style>