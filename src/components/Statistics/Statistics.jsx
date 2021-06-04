import { useEffect, useState } from 'react'
import axios from 'axios'
import "./Statistics.css"
import StatsListItem from './StatListItem'

const Statistics = ({update}) => {

    const [winners, setWinners] = useState([])
    const [losers, setLosers] = useState([])

    useEffect(() => {
        function getStats() {
            axios.all([
                axios.get("/winners"),
                axios.get("/losers"),
            ])
                .then(axios.spread((obj1, obj2) => {
                    if (obj1.status !== 200 || obj2.status !== 200) {
                    } else {
                        setWinners(obj1.data);
                        setLosers(obj2.data);
                    }
                }));
        }
        getStats();
    }, []);

    return (
        <div className="statistics">
            <i className="fa-5x fas fa-long-arrow-alt-up"></i>
            <div className="list">
                <h5>Vinnare</h5>
                {winners.map((hamster, index) =>
                    <StatsListItem key={hamster.name} hamster={hamster} index={index} text="vinster" />)}

            </div>


            <div className="list">
                <h5>Förlorare</h5>
                {losers.map((hamster, index) =>
                    <StatsListItem key={hamster.name} hamster={hamster} index={index} text="förluster" />)}
            </div>
            <i className="fa-5x fas fa-long-arrow-alt-down"></i>
        </div>
    )
}

export default Statistics