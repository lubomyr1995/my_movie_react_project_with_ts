export interface IImageAdd {
    aspect_ratio: number
    height: number
    file_path: string
    vote_average: number
    vote_count: number
    width: number
}

export interface IImage {
    backdrops: IImageAdd[];
    logos: IImageAdd[];
    posters: IImageAdd[];
}