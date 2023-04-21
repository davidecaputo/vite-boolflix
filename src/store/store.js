import { reactive } from "vue";

export const store = reactive({
    film:[],
    serieTv:[],
    baseUrl: 'https://api.themoviedb.org/3',
    endpoint: {
        film: '/search/movie',
        serie: '/search/tv'
    },
    params: {
        api_key: 'c209586b3bc180154fabd728ff2765ba',
        language: 'it-IT',
        query: ''
    },
    imageUrl: 'https://image.tmdb.org/t/p/w500'
})