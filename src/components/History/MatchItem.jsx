import { useState, useEffect } from "react";
import axios from 'axios'

const MatchItem = ({ winnerId, loserId }) => {
    const [winner, setWinner] = useState({})
    const [loser, setLoser] = useState({})

    useEffect(() => {
        function getHamsters() {

            axios.get(`/hamsters/${winnerId}`)
                .then(response => {
                    console.log(response);
                    // if (response.status !== 200) {
                    //     setWinner({ name: "Död hamster X" })
                    // } else setWinner(response.data)
                })

            axios.get(`/hamsters/${loserId}`)
                .then(response => {
                    console.log(response);
                    // if (response.status !== 200) {
                    //     setLoser({ name: "Död hamster X" })
                    // } else setLoser(response.data)
                })
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