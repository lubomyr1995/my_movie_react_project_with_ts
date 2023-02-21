import {FC} from 'react';
import {Pagination, Stack} from "@mui/material";

import {useAppSelector} from "../../hooks";
import {useSearchParams} from "react-router-dom";


const Paginator: FC = () => {
    const {total_pages} = useAppSelector(state => state.movieReducer);
    const [query, setQuery] = useSearchParams({page: '1'});
    return (
        <Stack spacing={2}>
            <Pagination onChange={(_, num) => setQuery({page: num.toString()})}
                        page={Number(query.get('page'))}
                        count={total_pages > 500 ? 499 : total_pages}
                        variant="outlined"/>
        </Stack>
    );
};

export {Paginator};