import {FC} from 'react';
import {useAppSelector} from "../../hooks";


const UserInfoPage: FC = () => {
    const {isDarkMode} = useAppSelector(state => state.movieReducer);
    return (
        <div id={isDarkMode ? 'bg_dark_body' : 'bg_light_body'}
             style={{minHeight: '100vh', boxSizing: 'border-box', padding: 20}}>
            <div id={isDarkMode ? 'text_color_dark' : 'text_color_lighy'}>
                UserInfoPage:
                <hr/>
                <h5>name: Liubomyr</h5>
                <h5>surname: Zmiiovskyi</h5>
                <h5>email: lubomyr1995@gmail.com</h5>
                <h5>address: Lviv</h5>
                <h5>telegram: @lubomyr1995</h5>
            </div>
        </div>
    );
};

export {UserInfoPage};