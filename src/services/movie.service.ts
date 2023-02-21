import apiService, {IRes} from "./api.service";
import {urls} from "../constants";
import {IGenreResponse, IInfo, IServerResponse} from "../interfaces";

const movieService = {
    getMovies: (page: number, genre: number = 0): IRes<IServerResponse> =>
        apiService.get(`${urls.movies}?page=${page}` + (genre > 0 ? `&with_genres=${genre}` : '')),
    getGenres: (): IRes<IGenreResponse> =>
        apiService.get(urls.genres),
    getMovieDetailsById: (movieId: number): IRes<IInfo> =>
        apiService.get(`${urls.movie}/${movieId}?append_to_response=videos,images`),
    getSearchMovies: (query: string, page: number): IRes<IServerResponse> =>
        apiService.get(urls.search, {params: {query, page}})
}

export {movieService}