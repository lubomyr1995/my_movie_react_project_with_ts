import {FC} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {GenresPage, MovieInfoPage, MoviesPage, NotFoundPage, SearchPage, UserInfoPage} from "./pages";
import './App.css'

const App: FC = () => {

    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'movies'}/>}/>
                <Route path={'movies'} element={<MoviesPage/>}/>
                <Route path={'movies/:id'} element={<MovieInfoPage/>}/>
                <Route path={'genres'} element={<GenresPage/>}>
                    <Route index element={<Navigate to={'28'}/>}/>
                    <Route path={':genreId'} element={<MoviesPage/>}/>
                </Route>
                <Route path={'search/movie'} element={<SearchPage/>}/>
                <Route path={'user'} element={<UserInfoPage/>}/>

                <Route path={'*'} element={<NotFoundPage/>}/>
            </Route>
        </Routes>
    );
};

export {
    App
};
