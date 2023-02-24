import {useSearchParams} from "react-router-dom";
import {FC} from 'react';
import {Badge} from "@mui/material";

import {useAppSelector} from "../../hooks";
import {ITopicality} from "../../interfaces";
import css from './TopicalityBadge.module.css';

interface IProps {
    topicality: ITopicality
}

const TopicalityBadge: FC<IProps> = ({topicality}) => {
    const {name, query} = topicality;
    const {isDarkMode} = useAppSelector(state => state.movieReducer);
    const [, setQuery] = useSearchParams();


    return (
        <Badge>
            <button onClick={() => setQuery(query)} id={isDarkMode ? 'bg_dark_top_badge' : 'bg_light_top_badge'}
                    className={css.badge}>
                {name}
            </button>
        </Badge>
    );
}

export {TopicalityBadge};