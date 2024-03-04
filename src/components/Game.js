import React, {useEffect, useState} from 'react';
import {cards} from "../utils/constants";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {setCompWins,setPlayerWins,} from "../reducer/gameReducer";


const Game = () => {
    const dispatch = useDispatch();
    const name = useSelector(state => state.player.name);
    const [compCards, setCompCards] = useState([]);
    const [playerCards, setPlayerCards] = useState([]);
    const [compCard, setCompCard] = useState(
        {
            src: require('../images/blueback-1024x1024.jpg'),
            value: 0
        });
    const [playerCard, setPlayerCard] = useState(
        {
            src: require('../images/blueback-1024x1024.jpg'),
            value: 0
        });

    const nav = useNavigate();

    useEffect(() => {
        let deck = [...cards];
        for (let i = 0; i < 10; i++)
            deck.sort(() => Math.random() - 0.5);
        setCompCards(deck.slice(0, deck.length / 2));
        setPlayerCards(deck.slice(deck.length / 2, deck.length));
        }, []);

    const handleClickNext = () => {
        if (compCards.length) {
            setCompCard(compCards.pop());
            setPlayerCard(playerCards.pop());
            if (compCard.value > playerCard.value)
                dispatch(setCompWins(1));
            else if (compCard.value < playerCard.value)
                dispatch(setPlayerWins(1));
        } else {
            nav("result");
        }
    }
    return (
        <div>
            <h1 className={'players computer'}>Computer</h1>
            <div className={'playerDeck'}>
                <img src={compCard.src} alt=""/>
            </div>
            <h1 className={'players you'}>{name}</h1>
            <div className={'playerDeck'}>
                <img src={playerCard.src} alt=""/>
            </div>
            <button className={'ingameButton'}
                    onClick={() => handleClickNext()}>Next
            </button>
        </div>
    );
};
export default Game;

