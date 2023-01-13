import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Choose from "./Choose";
import Tictactoe from "./Tictactoe";
// function check: return "f" if the game is not done yet, "w" if there is a winner and "d" if there is no winners

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path = "/" element = {<Choose/>} />
                <Route path = "/game" element = {<Tictactoe/>} />
            </Routes>
        </Router>
        
    )
}



