import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios";

import {IGenre, IGenreResponse, IInfo, IMovie, IServerResponse} from "../../interfaces";
import {movieService} from "../../services";

interface IState {
    isDarkMode: boolean;
    genres: IGenre[];
    genre: IGenre | null;
    movies: IMovie[];
    movie: IInfo | null;
    page: number;
    total_pages: number;
    loading: boolean;
    errors: boolean | string | unknown;
    searchQuery: string;
    showImage: boolean;
    urlImg: string;
}

const initialState: IState = {
    isDarkMode: true,
    genres: [],
    genre: null,
    movies: [],
    movie: null,
    page: 1,
    total_pages: 1,
    loading: false,
    errors: false,
    searchQuery: '',
    showImage: false,
    urlImg: ''
}

const getAllGenres = createAsyncThunk<IGenreResponse, void>(
    'movieSlice/getAllGenres',
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getGenres();
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const getAllMovies = createAsyncThunk<IServerResponse, { page: number, genre: number }>(
    'movieSlice,getAllMovies',
    async ({page, genre}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovies(page, genre)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const getSearchMovies = createAsyncThunk<IServerResponse, { query: string, page: number }>(
    'movieSlice/getSearchMovies',
    async ({query, page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getSearchMovies(query, page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);

const getPopularMovie = createAsyncThunk<IServerResponse, { page: number }>(
    'movieSlice/getPopularMovie',
    async ({page}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getPopularMovies(page)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)

const getMovieWithContent = createAsyncThunk<IInfo, { movieId: number }>(
    'movieSlice/getMovieWithContent',
    async ({movieId}, {rejectWithValue}) => {
        try {
            const {data} = await movieService.getMovieDetailsById(movieId)
            return data
        } catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
);


const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {
        setDarkMode: state => {
            state.isDarkMode = !state.isDarkMode
        },
        setSearchQuery: (state, action) => {
            state.searchQuery = action.payload
        },
        setFlag: (state, action) => {
            state.showImage = action.payload
        },
        setImage: (state, action) => {
            state.urlImg = action.payload
        }
    },
    extraReducers: builder => {
        builder
            // getAllGenres
            .addCase(getAllGenres.pending, (state) => {
                state.errors = false
            })
            .addCase(getAllGenres.fulfilled, (state, action) => {
                state.genres = action.payload.genres
            })
            .addCase(getAllGenres.rejected, (state, action) => {
                state.errors = action.payload
            })

            // getAllMovies
            .addCase(getAllMovies.pending, (state) => {
                state.loading = true
                state.errors = false
                state.movies = []
                state.total_pages = 1
                state.page = 1
            })
            .addCase(getAllMovies.fulfilled, (state, action) => {
                state.loading = false
                const {results, total_pages, page} = action.payload
                state.movies = results
                state.total_pages = total_pages
                state.page = page
            })
            .addCase(getAllMovies.rejected, (state, action) => {
                state.errors = action.payload
            })

            // getSearchMovies
            .addCase(getSearchMovies.pending, (state) => {
                state.loading = true
                state.errors = false
                state.movies = []
                state.total_pages = 1
                state.page = 1
            })
            .addCase(getSearchMovies.fulfilled, (state, action) => {
                state.loading = false
                const {results, total_pages, page} = action.payload
                state.movies = results
                state.total_pages = total_pages
                state.page = page
            })
            .addCase(getSearchMovies.rejected, (state, action) => {
                state.errors = action.payload
            })

            // getPopularMovie
            .addCase(getPopularMovie.pending, state => {
                state.loading = true
                state.errors = false
                state.movies = []
                state.total_pages = 1
                state.page = 1
            })
            .addCase(getPopularMovie.fulfilled, (state, action) => {
                state.loading = false
                const {results, total_pages, page} = action.payload
                state.movies = results
                state.total_pages = total_pages
                state.page = page
            })
            .addCase(getPopularMovie.rejected, (state, action) => {
                state.errors = action.payload
            })

            // getMovieWithContent
            .addCase(getMovieWithContent.pending, (state) => {
                state.loading = true
                state.errors = false
                state.movie = null
                state.urlImg = ''
                state.showImage = false
            })
            .addCase(getMovieWithContent.fulfilled, (state, action) => {
                state.loading = false
                state.movie = action.payload
            })
            .addCase(getMovieWithContent.rejected, (state, action) => {
                console.log(action.payload)
                state.errors = action.payload
            })
    }
});

const {reducer: movieReducer, actions: {setDarkMode, setSearchQuery, setFlag, setImage}} = movieSlice;

const movieActions = {
    setDarkMode,
    setSearchQuery,
    setFlag,
    setImage,
    getAllGenres,
    getAllMovies,
    getSearchMovies,
    getMovieWithContent,
    getPopularMovie
}

export default movieReducer
export {movieActions}