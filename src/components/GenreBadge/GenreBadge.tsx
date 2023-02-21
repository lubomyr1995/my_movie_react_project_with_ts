import {FC} from 'react';
import {IGenre} from "../../interfaces";
import {Badge} from "@mui/material";
import {Link} from "react-router-dom";
import {useAppSelector} from "../../hooks";

interface IProps {
    badge: IGenre
}

const GenreBadge: FC<IProps> = ({badge}) => {
    const {id, name} = badge;
    const {isDarkMode} = useAppSelector(state => state.movieReducer);

    return (
        <Badge>
            <Link id={isDarkMode ? 'bg_dark_badge' : 'bg_light_badge'} to={'/genres/' + id}
                  style={{
                      textDecoration: "none",
                      color: "black",
                      marginRight: 5,
                      border: "1px solid silver",
                      borderRadius: 5,
                      paddingRight: 5,
                      paddingLeft: 5,
                      boxShadow: "1px -1px 7px 1px rgba(221,167,16,0.86)",
                  }}>
                {name}
            </Link>
        </Badge>
    );
}

export {GenreBadge};