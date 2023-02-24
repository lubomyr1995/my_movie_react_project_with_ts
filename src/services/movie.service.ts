import apiService, {IRes} from "./api.service";
import {urls} from "../constants";
import {IGenreResponse, IInfo, IServerResponse} from "../interfaces";

const movieService = {
    getMovies: (page: number, genre: string | undefined, sort_by: string | null): IRes<IServerResponse> =>
        apiService.get(urls.movies, {params: {page, with_genres: genre, sort_by}}),
    getGenres: (): IRes<IGenreResponse> =>
        apiService.get(urls.genres),
    getMovieDetailsById: (movieId: number): IRes<IInfo> =>
        apiService.get(`${urls.movie}/${movieId}`, {params: {append_to_response: 'videos,images'}}),
    getSearchMovies: (query: string | null, page: number): IRes<IServerResponse> =>
        apiService.get(urls.search, {params: {query, page}})
}

export {movieService}