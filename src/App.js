import './App.css';
import Game from "./components/Game";
import Result from "./components/Result";
import Start from "./components/Start";
import React from 'react';
import {Route, Routes} from "react-router-dom";


const App = () => {
    return (
        <Routes>
            <Route path = {"start"}
                   element = {<div className = {"field"}><Start/></div>}></Route>
            <Route path = {"/"} element={<div className = {"field"}><Start/></div>}></Route>
            <Route path = {"game"}
                   element = {<div className = {"field"}><Game/></div>}></Route>
            <Route path = {"game/result"}
                   element = {<div className = {"field"}><Result/></div>}></Route>
        </Routes>
    )
}
export default App;



