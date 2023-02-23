import {FC} from 'react';
import YouTube from "react-youtube";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';

import {IVideoAdd} from "../../interfaces";


interface IProps {
    videos: IVideoAdd[]
}

const Videos: FC<IProps> = ({videos}) => {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 0,
            origin: 'http://localhost:3000/'
        },
    };
    return (
        <div>
            <Carousel width={900}>
                {videos.slice(0, 5).map((video) => (
                    <YouTube style={{width:"100%"}} key={video.id} opts={opts} videoId={video.key}/>
                ))}
            </Carousel>
        </div>
    );
};

export {Videos};