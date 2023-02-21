import {IGenre} from "./iGenre";
import {IImage} from "./iImage";
import {IVideo} from "./iVideo";

export interface IInfo {
    id: number;
    adult: boolean;
    backdrop_path: string;
    budget: number;
    revenue: number;
    genres: IGenre[];
    homepage: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    vote_average: number;
    vote_count: number;
    release_date: string;
    videos: IVideo;
    images: IImage;
}