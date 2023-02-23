import {FC} from 'react';
import {ITop} from "../../interfaces";
import {Link} from "react-router-dom";
import {Badge} from "@mui/material";
import {useAppSelector} from "../../hooks";

interface IProps {
    top: ITop
}

const TopicalityBadge: FC<IProps> = ({top}) => {

    const {isDarkMode} = useAppSelector(state => state.movieReducer);
    return (
        <Badge>
            <Link id={isDarkMode ? 'bg_dark_badge' : 'bg_light_badge'} to={top.name}
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
                {top.name}
            </Link>
        </Badge>
    );
}

export {TopicalityBadge};