import { useState, useEffect } from "react";
import StatListItem from "../Statistics/StatListItem"
import axios from 'axios'

const MatchItem = ({ winnerId, loserId }) => {
    const [winner, setWinner] = useState({})
    const [loser, setLoser] = useState({})

    useEffect(() => {
        function getHamsters() {

            axios.get(`/hamsters/${winnerId}`)
                .then(response => {
                    setWinner(response.data)
                })
                .catch(function (error) {
                    if (error.response) {
                        setWinner({ name: "This hamster is dead" })
                    }
                });

            axios.get(`/hamsters/${loserId}`)
                .then(response => {
                    setLoser(response.data)
                })
                .catch(function (error) {
                    if (error.response) {
                        setLoser({ name: "This hamster is dead" })
                    }
                });
        }
        getHamsters();
    }, []);

    return (
        <div className="match-item">
            <div className="vs"><i class="fa-2x far fa-smile"></i></div>
            <StatListItem hamster={winner} showResult={false} />
            <div className="vs"><h5>VS</h5></div>
            <StatListItem hamster={loser} showResult={false} />
            <div className="vs"><i class="fa-2x far fa-frown"></i></div>
        </div>
    )
}
export default MatchItem