import React from "react"
import Cell from "./components/Cell"
import SupportBoard from "./components/SupportBoard"

// function check: return "f" if the game is not done yet, "w" if there is a winner and "d" if there is no winners
function check(boardArray){
    if (boardArray[0] !== "" && boardArray[0] === boardArray[1] && boardArray[1] === boardArray[2]) return "w";
    else if (boardArray[3] !== "" && boardArray[3] === boardArray[4] && boardArray[4] === boardArray[5]) return "w";
    else if (boardArray[6] !== "" && boardArray[6] === boardArray[7] && boardArray[7] === boardArray[8]) return "w";
    else if (boardArray[0] !== "" && boardArray[0] === boardArray[3] && boardArray[3] === boardArray[6]) return "w";
    else if (boardArray[1] !== "" && boardArray[1] === boardArray[4] && boardArray[4] === boardArray[7]) return "w";
    else if (boardArray[2] !== "" && boardArray[2] === boardArray[5] && boardArray[5] === boardArray[8]) return "w";
    else if (boardArray[0] !== "" && boardArray[0] === boardArray[4] && boardArray[4] === boardArray[8]) return "w";
    else if (boardArray[2] !== "" && boardArray[2] === boardArray[4] && boardArray[4] === boardArray[6]) return "w";
    let count = 0;
    boardArray.forEach(element => {
        if(element !== "") count += 1;
    });
    if (count === 9) return "d"
    return "f"
}

export default function Tictactoe() {
    // cellProps contains the char ticked on the cell and is the cell ticked
    const [cellProps,setcellProps] = React.useState(Array.from({length: 9}, (_,index) => {
        return {
            word: "",
            isTicked: false,
        }
    }))

    const [currPlayer,setCurrPlayer] = React.useState("O")
    // checkBoard is an array contain the character ticked on each cell
    const [checkBoard,setCheckBoard] = React.useState(Array.from({length: 9}, (_,index) => {
        return ""
    }))

    let reset = false
    function toggle (cellKey, ticked) {   
        
        if(!ticked && check(checkBoard) === "f") {
            setcellProps(prevArray => {
                return prevArray.map((element,index) => {
                    return (index === cellKey ? {word: currPlayer, isTicked : true} : element)
                })
            })
            setCheckBoard(prevArray => {
                return prevArray.map((element,index) => {
                    return index === cellKey ? currPlayer : element
                })
            })
            let newCurrPlayer
            if (currPlayer === "X") newCurrPlayer = "O"
            else newCurrPlayer = "X"
            setCurrPlayer(newCurrPlayer)
        }
    }
    // function to refresh the game
    function resetClick() {
        setcellProps(Array.from({length: 9}, (_,index) => {
            return {
                word: "",
                isTicked: false,
            }
        }))
        setCheckBoard(Array.from({length: 9}, (_,index) => {
            return ""
        }))
        setCurrPlayer("O")
        reset = false
    }

    if (check(checkBoard) !== "f") reset = true
    const cellArray = Array.from({length: 9}, (_,index) => {
        return <Cell 
        character = {cellProps[index].word}
        ticked = {cellProps[index].isTicked}
        cellNum = {index}
        handleChange = {toggle}
        />
    })
    return(
        <main>
            <section>
            <SupportBoard player = {currPlayer} done = {check(checkBoard)} />
            <div className="container">
            {cellArray}
            </div>
        </section>
        {reset && <button className="reset--button" onClick={resetClick}>Reset</button>}
        </main>
    )
}


