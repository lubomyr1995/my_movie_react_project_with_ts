import {FC} from 'react';
import {Box} from "@mui/material";

import {useAppSelector} from "../../hooks";
import {Genre} from "../Genre/Genre";
import {ITop} from "../../interfaces";
import {TopicalityBadge} from "../TopicalityBadge/TopicalityBadge";


const GenreList: FC = () => {
    const {isDarkMode, genres} = useAppSelector(state => state.movieReducer);

    const topPopular: ITop = {name: 'popular'}

    return (
        <Box id={isDarkMode ? 'bg_dark_genre' : 'bg_light_genre'}
             style={{boxSizing: "border-box", padding: "5%", width: "100%", minHeight: "100%"}}>
            <div style={{padding: 5}}>
                <TopicalityBadge top={topPopular}/>
            </div>
            {genres && genres.map(genre => <Genre key={genre.id} genre={genre} isDarkMode={isDarkMode}/>)}
        </Box>
    );
};

export {GenreList};