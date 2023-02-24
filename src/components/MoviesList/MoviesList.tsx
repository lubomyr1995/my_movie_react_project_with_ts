import {FC} from 'react';

import {useAppSelector} from "../../hooks";
import {MovieCard} from "../MovieCard/MovieCard";
import {Paginator} from "../Paginator/Paginator";


const MoviesList: FC = () => {
    const {movies, genres} = useAppSelector(state => state.movieReducer);

    return (
        <div>
            <div style={{
                boxSizing: "border-box",
                padding: "5px",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                flexWrap: "wrap",
                gap: "10px"
            }}>
                {movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} genres={genres}/>)}
            </div>

            <div style={{width: "100%", paddingTop: 20, paddingBottom: 20, display: "flex", justifyContent: "center"}}>
                <Paginator/>
            </div>

        </div>
    );
};

export {MoviesList};