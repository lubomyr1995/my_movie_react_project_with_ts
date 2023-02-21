import {FC, useEffect} from 'react';

import {Header} from "../../components";
import {Outlet, useParams, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux";
import {useAppDispatch, useAppSelector} from "../../hooks";


const MainLayout: FC = () => {
    const {searchQuery} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const {genreId} = useParams<{ genreId: string | undefined }>();
    const [query] = useSearchParams({page: '1'});

    useEffect(() => {

        if (searchQuery) {
            dispatch(movieActions.getSearchMovies({query: searchQuery, page: Number(query.get('page'))}))
            dispatch(movieActions.getAllGenres());

        } else {
            dispatch(movieActions.getAllMovies({page: Number(query.get('page')), genre: Number(genreId)}))
            dispatch(movieActions.getAllGenres());
        }
    }, [dispatch, genreId, query, searchQuery])
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};