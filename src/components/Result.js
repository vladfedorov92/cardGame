import React from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {resetStats} from "../reducer/gameReducer";

const Result = () => {
    const name = useSelector(state => state.player.name);
    const compWins=useSelector(state => state.game.compWins);
    const playerWins=useSelector(state => state.game.playerWins);
    const dispatch = useDispatch();
    const getResult = () => {
        if(compWins > playerWins)
            return "You LOSE!"
        if(compWins < playerWins)
            return "You WIN!"
        return "DRAW"
    }
    const newGame=()=>{
        dispatch(resetStats());
        }
    return (
        <div className={'playerForm'}>
            <h1 className={'readyForWar'}>{getResult()}</h1>
            <h2 className={'readyForWar small'}> Comp {compWins} : {name} {playerWins} </h2>
            <Link to={"/game"} onClick={()=>newGame()}>
                <button className={'startButton'}>Again?
                </button>
            </Link>
            <Link to={"/Start"} onClick={()=>newGame()}>
                <button className={'startButton'}>New Player
                </button>
            </Link>
        </div>
    );
};

export default Result;