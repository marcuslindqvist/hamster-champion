import { useEffect, useState } from "react";
import axios from 'axios'
import MatchItem from "./MatchItem"

let prev = 0;
let next = 0;
let last = 0;
let first = 0;

const History = () => {
    const [matches, setMatches] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [matchesPerPage, setMatchesPerPage] = useState(5)

    useEffect(() => {
        function getMatches() {

            axios.get("/matches")
                .then(response => setMatches(response.data));
        }

        getMatches();
    }, []);

    let indexOfLastMatch = currentPage * matchesPerPage;
    let indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
    let currentMatches = matches.slice(indexOfFirstMatch, indexOfLastMatch);

    prev = currentPage > 0 ? (currentPage - 1) : 0;
    last = Math.ceil(matches.length / matchesPerPage);
    next = (last === currentPage) ? currentPage : currentPage + 1;

    return (
        <div>
            {matches.map((match) => <MatchItem key={match.id} winnerId={match.winnerId} loserId={match.loserId} />)}
        </div>
    )
}
export default History