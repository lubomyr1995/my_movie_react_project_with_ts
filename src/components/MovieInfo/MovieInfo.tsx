import {FC} from 'react';
import {Rating} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

import {useAppDispatch, useAppSelector} from "../../hooks";
import {urls} from "../../constants";
import {IInfo} from "../../interfaces";
import css from './MovieInfo.module.css'
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {Images} from "../Images/Images";
import {ImagesLogo} from "../ImagesLogo/ImagesLogo";
import {movieActions} from "../../redux";
import {Videos} from "../Videos/Videos";


interface IProps {
    movie: IInfo
}

const MovieInfo: FC<IProps> = ({movie}) => {
    const {isDarkMode, showImage, urlImg} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {
        backdrop_path,
        original_title,
        popularity,
        genres,
        budget,
        homepage,
        vote_average,
        vote_count,
        release_date,
        original_language,
        overview,
        revenue,
        images,
        videos
    } = movie
    const backdrop = urls.backdrop + backdrop_path

    return (
        <div style={{width: '100%', justifyContent: "center"}}>
            {(backdrop_path && backdrop_path.length > 0) &&
                <img className={css.background_fon} src={backdrop} alt="font"/>}

            {showImage && <div className={css.show_image}>

                <div style={{width: '100%', textAlign: "right"}}>
                    <CloseIcon sx={{cursor: 'pointer'}} onClick={() => dispatch(movieActions.setFlag(false))}/>
                </div>
                <img onClick={() => dispatch(movieActions.setFlag(false))}
                     style={{width: '100%', backgroundColor: 'silver'}} src={urlImg} alt="xxx"/>
            </div>}

            <div id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'} className={css.container_title}>
                {original_title}
            </div>
            <div style={{display: 'flex', position: "relative", zIndex: '2', paddingBottom: 20}}>

                <div style={{display: "flex", width: '50%'}}>
                    <div className={css.logo}>
                        {images.logos.length > 0 && <ImagesLogo images={images.logos}/>}
                    </div>
                    <div className={css.movie_content}>

                        <div><a id={isDarkMode ? 'text_color_dark' : 'text_color_light'} href={homepage}> :Homepage</a>
                        </div>
                        <div style={{margin: 20}}>
                            {genres.length > 0 && genres.map(badge => badge &&
                                <GenreBadge key={badge.id} badge={badge}/>)}
                        </div>
                        <Rating sx={{marginLeft: 10}} name="half-rating-read" defaultValue={Number(vote_average) / 2}
                                precision={0.5} readOnly
                                size="large"/>
                        <div id={isDarkMode ? 'text_color_dark' : 'text_color_light'}>
                            <h4>Popularity: {popularity}</h4>
                            <h4>Data release: {release_date}</h4>
                            <h5>Language: {original_language}</h5>
                            {budget > 0 && <h5>Budget: {budget}$</h5>}
                            {revenue > 0 && <h5>Revenue: {revenue}$</h5>}
                            <h5>Vote count: {vote_count}</h5>
                            <h5>Vote average: {vote_average}</h5>
                            <b>{overview}</b>
                        </div>
                    </div>
                </div>
                <div className={css.other_content}>
                    {images.backdrops.length > 0 && <Images images={images.backdrops}/>}
                </div>
            </div>
            <div className={css.video_content}>
                {videos.results.length > 0 && <Videos videos={videos.results}/>}
            </div>
        </div>
    );
};

export {MovieInfo};