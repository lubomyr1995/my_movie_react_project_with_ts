import {FC} from 'react';
import {Outlet,} from "react-router-dom";

import {GenreList} from "../../components";
import {useAppSelector} from "../../hooks";


const GenresPage: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.movieReducer);
    return (
        <div style={{display: "flex", width: "100%"}}>
            <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'} style={{width: "80%"}}><Outlet/></div>
            <div style={{width: "20%", borderLeft: '1px solid silver'}}><GenreList/></div>
        </div>
    );
};

export {
    GenresPage
};