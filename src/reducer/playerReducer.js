import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "Player"
    };

const playerSlice = createSlice({
    name: 'player',
    initialState: initialState,
    reducers: {
        changePlayerName: (state, action) => {
            state.name = action.payload ? action.payload : state.name;
        },
    },
});
export const { changePlayerName } = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
