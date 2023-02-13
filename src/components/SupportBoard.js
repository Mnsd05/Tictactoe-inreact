import React from "react"

export default function SupportBoard(props) {
    let display
    const playerNames = JSON.parse(localStorage.getItem("info"))
    const mapPlayer = new Map()
    mapPlayer.set("O", playerNames.player1) 
    mapPlayer.set("X", playerNames.player2) 
    if (props.done === "w") display=`${props.player === "X" ? mapPlayer.get("O") : mapPlayer.get("X")} wins`
    else if (props.done === "f") display = `${mapPlayer.get(props.player)} moves`
    else display = "Draws"
    return (
        <div className="support--board">
            <h2>{display}</h2>
        </div>
    )
}