const baseURL: string = 'https://api.themoviedb.org/3'

const urls = {
    backdrop: 'https://image.tmdb.org/t/p/original',
    image: 'https://image.tmdb.org/t/p/w500',
    movies: '/discover/movie',
    genres: '/genre/movie/list',
    movie: '/movie',
    search: '/search/movie'
}

export default baseURL;
export {urls};