import {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";
import {Errors, Loading, MoviesList} from "../../components";


const PopularMoviesPage: FC = () => {
    const {movies, isDarkMode, errors, loading, genres} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const [query] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(movieActions.getPopularMovie({page: Number(query.get('page'))}))
    }, [dispatch, query])

    return (
        <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'}
             style={{minHeight: "100vh"}}>
            <div id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'}
                 style={{textAlign: "center", fontSize: "26px", padding: 10}}>Popular Films
            </div>
            {loading && <Loading/>}
            <>{errors && <Errors errors={errors}/>}</>
            {(movies.length > 0 && genres.length > 0) && <MoviesList/>}
        </div>
    );
};

export {PopularMoviesPage};