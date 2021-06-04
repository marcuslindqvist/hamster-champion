import { useState, useEffect } from "react";
import StatListItem from "../Statistics/StatListItem"
import axios from 'axios'
import "./History.css"

const MatchItem = ({ winnerId, loserId, matchId, removeMatch }) => {
    const [winner, setWinner] = useState({})
    const [loser, setLoser] = useState({})
    const [showX, setShowX] = useState(false)

    useEffect(() => {
        function getHamsters() {

            axios.get(`/hamsters/${winnerId}`)
                .then(response => {
                    setWinner(response.data)
                })
                .catch(function (error) {
                    if (error.response) {
                        setWinner({ name: "Dead hamster" })
                    }
                });

            axios.get(`/hamsters/${loserId}`)
                .then(response => {
                    setLoser(response.data)
                })
                .catch(function (error) {
                    if (error.response) {
                        setLoser({ name: "Dead hamster" })
                    }
                });
        }
        getHamsters();
    }, [loserId, winnerId]);

    return (
        <div
            className="match-item"
            onMouseEnter={() => setShowX(true)}
            onMouseLeave={() => setShowX(false)}>

            <div className="vs"><i className="fa-2x far fa-smile"></i></div>

            <StatListItem hamster={winner} showResult={false} />

            <div className="vs"><h5>VS</h5></div>

            <StatListItem hamster={loser} showResult={false} />

            <div className="vs">
                <i className="fa-2x far fa-frown"></i>
            </div>

            {showX ?
                <i className="fa-2x fas fa-times"
                    onClick={() => removeMatch(matchId)}></i> : null}
        </div>
    )
}
export default MatchItem