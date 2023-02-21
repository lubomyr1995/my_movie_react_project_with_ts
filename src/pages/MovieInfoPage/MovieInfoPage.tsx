import {FC, useEffect} from 'react';

import {Errors, Loading, MovieInfo} from "../../components";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {useParams} from "react-router-dom";
import {movieActions} from "../../redux";

const MovieInfoPage: FC = () => {
    const {isDarkMode, movie, loading, errors} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const params = useParams();

    useEffect(() => {
        dispatch(movieActions.getMovieWithContent({movieId: Number(params.id)}))
    }, [params, dispatch])

    return (
        <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'}
             style={{minHeight: "100vh", width: '100%'}}>
            {loading && <Loading/>}
            <>{errors && <Errors errors={errors}/>}</>
            {movie && <MovieInfo movie={movie}/>}
        </div>
    );
};

export {MovieInfoPage};