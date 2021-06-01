import { useState, useEffect } from "react";
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
                        setWinner({name: "This hamster is dead"})
                    }
                });

            axios.get(`/hamsters/${loserId}`)
                .then(response => {
                    setLoser(response.data)
                })
                .catch(function (error) {
                    if (error.response) {
                        setLoser({name: "This hamster is dead"})
                    }
                });
        }
        getHamsters();
    }, []);

    return (
        <div>
            Vinnare: {winner.name}
            Förlorare: {loser.name}
        </div>
    )
}
export default MatchItem