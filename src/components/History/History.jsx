import { useEffect, useState } from "react";
import axios from 'axios'
import MatchItem from "./MatchItem"

const History = () => {
    const [matches, setMatches] = useState([])
    const [update, setUpdate] = useState("")

    let tenMatches = matches.slice(0, 10)

    useEffect(() => {
        function getMatches() {

            axios.get("/matches")
                .then(response => setMatches(response.data));
        }

        getMatches();
    }, [update]);

    function removeMatch(id) {
        
        try {
            axios.delete(`matches/${id}`)
                .then(response => console.log(response))
        } catch (error) {
            console.log(error.message);
        }

        setUpdate(Date.now())
    }

    return (
        <div className="history">
            {tenMatches.map((match) =>
                <MatchItem
                    key={match.id}
                    matchId={match.id}
                    winnerId={match.winnerId}
                    loserId={match.loserId}
                    removeMatch={removeMatch} />)}
        </div>
    )
}

export default History