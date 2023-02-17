import {IMovie} from "./iMovie";

export interface IServerResponse {
    page: number;
    results: IMovie[];
    total_pages: number;
    total_results: number;
};