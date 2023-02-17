import {createSlice} from "@reduxjs/toolkit";

interface IState {

}

const initialState: IState = {}

const movieSlice = createSlice({
    name: 'movieSlice',
    initialState,
    reducers: {},
    extraReducers: builder => {
    }
});

const {reducer: movieReducer} = movieSlice;

const movieActions = {}

export default movieReducer
export {movieActions}