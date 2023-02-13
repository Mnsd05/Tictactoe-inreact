import React from "react"

export default function Cell(props) {
    const markName = (props.character === "X" ? "cell--X" : "cell--O") 
    return (
        <button className={markName} onClick={()=>props.handleChange(props.cellNum,props.ticked)}>
            {props.character}
        </button>
    )
  
}


// player X starts first. 
// when click on the button, player in app change to X.
// create an array of cell, when click on a cell, update the property
// after clicking, change curr player to 0