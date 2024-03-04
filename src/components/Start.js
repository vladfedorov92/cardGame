import React, { useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {changePlayerName} from "../reducer/playerReducer";

const Start = () => {
    const [playerName, setPlayerName] = useState("Player");
    const dispatch = useDispatch();

    return (
        <div className={'playerForm'}>
            <h1 className={'readyForWar'}>Ready for war?</h1>
            <input className={'playerName'} type="text" placeholder={"Enter your name"}
                   onChange={(e) => setPlayerName(e.target.value)}/>
            <Link to={"/game"}>
                <button className={'startButton'}
                        onClick={() => dispatch(changePlayerName(playerName))}
                >Start
                </button>
            </Link>
        </div>
    )};
export default Start;

