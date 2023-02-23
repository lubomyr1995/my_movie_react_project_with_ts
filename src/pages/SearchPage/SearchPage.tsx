import {FC} from 'react';

import {Errors, Loading, MovieCard, Paginator} from "../../components";
import {useAppSelector} from "../../hooks";

const SearchPage: FC = () => {
    const {movies, genres, searchQuery, isDarkMode, loading, errors} = useAppSelector(state => state.movieReducer);

    return (
        <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'} style={{minHeight: "100vh"}}>
            <div style={{width: "100%"}}>{searchQuery &&
                <div id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'}
                     style={{textAlign: "center", fontSize: "26px", padding: 10}}>Result
                    Searching: "{searchQuery}"
                </div>}
                {loading && <Loading/>}
                <>{errors && <Errors errors={errors}/>}</>
            </div>
            <div style={{
                boxSizing: "border-box",
                padding: "5px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "10px"
            }}>
                {(movies.length > 0 && genres.length > 0) && movies.map(movie =>
                    <MovieCard key={movie.id} movie={movie}
                               genres={genres}/>)}
            </div>

            <div style={{width: "100%", padding: 20, display: "flex", justifyContent: "center"}}>
                {(movies.length > 0 && genres.length > 0) && <Paginator/>}
            </div>

        </div>
    );
};

export {SearchPage};