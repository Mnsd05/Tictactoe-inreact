import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Choose from "./Choose";
import Tictactoe from "./Tictactoe";

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



