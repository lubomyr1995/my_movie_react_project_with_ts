import {FC} from 'react';
import {IGenre} from "../../interfaces";
import {NavLink} from "react-router-dom";

interface IProps {
    genre: IGenre
    isDarkMode: boolean
}


const Genre: FC<IProps> = ({genre, isDarkMode}) => {
    const {id, name} = genre;
    return (
        <div className={isDarkMode ? 'genre_dark' : 'genre_light'}>
            <NavLink to={'/genres/' + id} style={{
                boxSizing: "border-box",
                paddingLeft: "10px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                margin: "5px",
                minHeight: "40px",
                width: "150px",
                border: "1px solid #12addb",
                borderRadius: "7px",
                boxShadow: "15px 9px 20px -12px rgba(147, 242, 227, 1)"
            }}>
                {name}
            </NavLink>

        </div>
    );
};

export {Genre};