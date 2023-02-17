import {IGenre} from "./iGenre";

export interface IMovie {
    id?: number;
    backdrop_path?: string;
    genres?: IGenre[];
    genre_ids?: [];
    original_language?: string;
    original_title?: string;
    overview?: string;
    popularity?: number;
    poster_path?: string;
    release_date?: string;
    title?: string;
    vote_average?: number
    // videos?: IVideoObj
    // images?: IImageObj
}