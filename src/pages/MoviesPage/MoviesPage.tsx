import {FC} from 'react';
import {useAppSelector} from "../../hooks";
import {Errors, Loading, MoviesList} from "../../components";


const MoviesPage: FC = () => {
    const {isDarkMode, movies, genres, loading, errors} = useAppSelector(state => state.movieReducer);

    return (
        <div>
            <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'}
                 style={{minHeight: "100vh"}}>
                {loading && <Loading/>}
                <>{errors && <Errors errors={errors}/>}</>
                {(movies.length > 0 && genres.length > 0) && <MoviesList/>}
            </div>
        </div>
    );
};

export {MoviesPage};