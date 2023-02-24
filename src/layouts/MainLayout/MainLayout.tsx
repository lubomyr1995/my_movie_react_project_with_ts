import {FC, useEffect} from 'react';

import {Header} from "../../components";
import {Outlet, useParams, useSearchParams} from "react-router-dom";
import {movieActions} from "../../redux";
import {useAppDispatch} from "../../hooks";


const MainLayout: FC = () => {

    const dispatch = useAppDispatch();
    const {genreId} = useParams<{ genreId: string | undefined }>();
    const [query] = useSearchParams({page: '1'});

    useEffect(() => {
        if (query.get('title')) {
            dispatch(movieActions.getSearchMovies({page: Number(query.get('page')), query: query.get('title')}))
            dispatch(movieActions.getAllGenres());
        } else {
            dispatch(movieActions.getAllMovies({
                page: Number(query.get('page')),
                genre: genreId,
                sort_by: query.get('rating')
            }))
            dispatch(movieActions.getAllGenres());
        }
    }, [dispatch, genreId, query])
    return (
        <div>
            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};