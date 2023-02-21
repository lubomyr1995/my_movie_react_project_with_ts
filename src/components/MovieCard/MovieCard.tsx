import {FC} from 'react';
import {Card, CardContent, CardMedia, Rating, Stack, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

import {IGenre, IMovie} from "../../interfaces";
import {urls} from "../../constants";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {useAppSelector} from "../../hooks";
import css from './MovieCard.module.css';

interface IProps {
    movie: IMovie,
    genres: IGenre[]
}

const MovieCard: FC<IProps> = ({movie, genres}) => {
    const {
        id,
        title,
        genre_ids,
        poster_path,
        release_date,
        vote_average
    } = movie;

    const badges = genre_ids?.map(genreId => genres?.find(el => el.id === genreId));
    const navigate = useNavigate();
    const {isDarkMode} = useAppSelector(state => state.movieReducer);

    return (
        <Card className={css.wrap_card} id={isDarkMode ? 'bg_dark_card' : 'bg_light_card'}
              sx={{width: "250px", minHeight: '650px', boxShadow: '6px 6px 8px 0px #1BFFF0'}}>
            <CardMedia onClick={() => navigate(`/movies/${id}`)}
                       sx={{display: 'block', minHeight: 200, width: '250px', cursor: "pointer"}}
                       component="img"
                       alt={title}
                       image={poster_path ? urls.image + poster_path : '#'}
            />
            <CardContent>
                {badges && badges.map(badge => badge &&
                    <GenreBadge key={badge.id} badge={badge}/>)}
            </CardContent>
            <CardContent>
                <Typography gutterBottom variant="h6" component="h6">
                    {title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Release: {release_date}
                </Typography>
                <Stack spacing={1}>
                    <Rating name="half-rating-read" defaultValue={Number(vote_average) / 2} precision={0.5} readOnly/>
                </Stack>
            </CardContent>
        </Card>
    );
};

export {MovieCard};