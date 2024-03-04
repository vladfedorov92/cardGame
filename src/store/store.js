import {configureStore} from "@reduxjs/toolkit";
import {gameReducer} from "../reducer/gameReducer";
import {playerReducer} from "../reducer/playerReducer";

const store = configureStore({
    reducer: {
        player: playerReducer,
        game: gameReducer
    },
});
export default store;
