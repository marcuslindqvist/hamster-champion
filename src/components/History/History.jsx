import { useEffect, useState } from "react";
import axios from 'axios'
import MatchItem from "./MatchItem"

const History = () => {
    const [matches, setMatches] = useState([])

    let tenMatches = matches.slice(0,10)

    useEffect(() => {
        function getMatches() {

            axios.get("/matches")
                .then(response => setMatches(response.data));
        }

        getMatches();
    }, []);

    return (
        <div className="history">
            {tenMatches.map((match) =>
                <MatchItem
                    key={match.id}
                    winnerId={match.winnerId}
                    loserId={match.loserId} />)}
        </div>
    )
}

export default History