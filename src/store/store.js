import { reactive } from "vue";

export const store = reactive({
    film:[],
    baseUrl: 'https://www.themoviedb.org',
    endpoint: {
        film: '/search/movie',
        serie: ''
    }
})