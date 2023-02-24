import {FC} from 'react';
import {useSearchParams} from "react-router-dom";

import {useAppSelector} from "../../hooks";
import {Errors, Loading, MoviesList, Topicality} from "../../components";


const MoviesPage: FC = () => {
    const {isDarkMode, movies, genres, loading, errors} = useAppSelector(state => state.movieReducer);
    const [query] = useSearchParams();

    return (
        <div>
            <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'}
                 style={{minHeight: "100vh"}}>

                <div style={{boxSizing: 'border-box', padding: 5}}>
                    <Topicality/>
                </div>

                {query.get('rating') && <div id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'} style={{
                    textAlign: "center",
                    fontSize: "26px",
                    padding: 10
                }}> Rating all time </div>}

                {query.get('title') && <div id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'}
                                            style={{textAlign: "center", fontSize: "26px", padding: 10}}>Result
                    Searching: "{query.get('title')}"
                </div>}
                {loading && <Loading/>}
                <>{errors && <Errors errors={errors}/>}</>
                {(movies.length > 0 && genres.length > 0) && <MoviesList/>}
            </div>
        </div>
    );
};

export {MoviesPage};