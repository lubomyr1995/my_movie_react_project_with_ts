import {FC} from 'react';
import YouTube from "react-youtube";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

import {IVideoAdd} from "../../interfaces";


interface IProps {
    videos: IVideoAdd[]
}

const Videos: FC<IProps> = ({videos}) => {
    return (
        <div>
            {videos.length > 6 &&
                <YouTube videoId={videos[0].key} />}
            {videos.length < 6 && < Carousel width={700}>
                {videos.map(video => (
                    <YouTube videoId={video.key}/>
                ))}
            </Carousel>}
        </div>
    );
};

export {Videos};