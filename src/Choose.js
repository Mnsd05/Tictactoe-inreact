import React from "react"
import {useNavigate} from "react-router-dom"
export default function Choose() {
    const [formData, setFormData] = React.useState(
        {
            player1: "", 
            player2: "", 
        }
    )
    function handleChange(event) {
        const {name,value} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]:value
            }
        })
    }
    const navigate = useNavigate()
    function handleSubmit(event) {
        event.preventDefault()
        localStorage.setItem("info", JSON.stringify(formData))
        navigate("/game")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Player 1 types name here"
                onChange={handleChange}
                name="player1"
                value={formData.player1}
            />
            <input
                type="text"
                placeholder="Player 2 types name here"
                onChange={handleChange}
                name="player2"
                value={formData.player2}
            />
                <button className="submit--button">Submit</button>
        </form>
    )
}

