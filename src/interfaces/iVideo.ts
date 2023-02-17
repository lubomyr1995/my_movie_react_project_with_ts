export interface IVideoAdd {
    id: string;
    name: string;
    key: string;
    published_at: string;
    site: string;
    size: string;
    type: string;
}

export interface IVideo {
    results: IVideoAdd[];
}