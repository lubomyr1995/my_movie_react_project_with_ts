import {FC} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {
    alpha,
    AppBar,
    Box,
    IconButton,
    InputBase,
    styled,
    Switch,
    Toolbar,
    Typography
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from "@mui/icons-material";
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {movieActions} from "../../redux";

const Header: FC = () => {
    type IFormInput = {
        name: string
    };

    const {isDarkMode} = useAppSelector(state => state.movieReducer);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const {register, handleSubmit, reset} = useForm<IFormInput>();

    const search: SubmitHandler<IFormInput> = (data): void => {
        dispatch(movieActions.setSearchQuery(data.name))
        navigate('search/movie')
        reset()
    }

    const Search = styled('form')(({theme}) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(isDarkMode ? theme.palette.common.white : theme.palette.common.black, 0.05),
        '&:hover': {
            backgroundColor: alpha(isDarkMode ? theme.palette.common.white : theme.palette.common.black, 0.1),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        color: isDarkMode ? '#cee3e8' : '#3f5b67',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({theme}) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
    }));


    return (
        <AppBar sx={{position: "sticky"}} id={isDarkMode ? 'bg_dark' : 'bg_light'}>
            <Toolbar>
                <Box>
                    <Typography sx={{mr: 10}} component="a" href="https://www.themoviedb.org">
                        <img style={{height: 50}}
                             src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                             alt="logo"/>
                    </Typography>
                </Box>
                <Box className={isDarkMode ? 'barDark' : 'barLight'}>
                    <NavLink onClick={() => dispatch(movieActions.setSearchQuery(null))} to={'/movies'}>MOVIES</NavLink>
                    <NavLink onClick={() => dispatch(movieActions.setSearchQuery(null))} to={'/genres'}>GENRES</NavLink>
                </Box>
                <Box sx={{ml: 10}}>
                    <Search onSubmit={handleSubmit(search)}>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                            {...register('name')}
                        />
                    </Search>
                </Box>
                <Box sx={{flexGrow: 1}}/>
                <Box>
                    <Switch
                        color="default"
                        checked={isDarkMode}
                        onChange={() => dispatch(movieActions.setDarkMode())}
                        inputProps={{'aria-label': 'controlled'}}
                    />

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={() => navigate('/user')}
                        id={isDarkMode ? 'icon_color_dark' : 'icon_color_light'}
                    >
                        <AccountCircle/>
                    </IconButton>

                </Box>
            </Toolbar>
        </AppBar>
    );
};

export {
    Header
};