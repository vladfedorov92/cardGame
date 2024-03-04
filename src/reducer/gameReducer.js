import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  compWins: 0,
  playerWins: 0,
  compCard:
            {src: require('../images/blueback-1024x1024.jpg'),
              value: 0},
  playerCard:
            {src: require('../images/blueback-1024x1024.jpg'),
              value: 0},
};
const gameSlice = createSlice({
  name: 'game',
  initialState: initialState,
  reducers: {
    setCompWins: (state, action) => {
      state.compWins += action.payload;
    },
    setPlayerWins: (state, action) => {
      state.playerWins += action.payload;
    },
    resetStats: (state) => {
      state.playerWins = 0;
      state.compWins = 0;
    },
  },
});
export const {setCompWins, setPlayerWins, resetStats} = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
