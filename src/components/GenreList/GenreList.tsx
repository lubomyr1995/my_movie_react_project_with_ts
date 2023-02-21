import {FC} from 'react';
import {Box} from "@mui/material";

import {useAppSelector} from "../../hooks";
import {Genre} from "../Genre/Genre";


const GenreList: FC = () => {
    const {isDarkMode, genres} = useAppSelector(state => state.movieReducer);

    return (
        <Box id={isDarkMode ? 'bg_dark_genre' : 'bg_light_genre'}
             style={{boxSizing: "border-box", padding: "5%", width: "100%", minHeight: "100%"}}>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre} isDarkMode={isDarkMode}/>)}
        </Box>
    );
};

export {GenreList};