import { useEffect, useState } from 'react'
import HamsterDisplay from "./HamsterDisplay"
import "./Battle.css"
import axios from 'axios'

const Battle = ({ hamsterList, update }) => {
    
    const [warriorOne, setWarriorOne] = useState({})
    const [warriorTwo, setWarriorTwo] = useState({})
    const [gameDetailsShow, setGameDetailsShow] = useState(false)

    function getRandomHamsters() {

        const first = Math.floor(Math.random() * hamsterList.length);

        let second = Math.floor(Math.random() * hamsterList.length)

        if (first === second) {
            second = Math.floor(Math.random() * hamsterList.length);
        }

        setWarriorOne(hamsterList[first])
        setWarriorTwo(hamsterList[second])
    }
    async function sendUpdateRequests(winnerId, loserId, winnerPatch, loserPatch) {

        axios.all([
            axios.put(`/hamsters/${winnerId}`, winnerPatch),
            axios.put(`/hamsters/${loserId}`, loserPatch),
            axios.post("/matches", { winnerId: winnerId, loserId: loserId })
        ])
            .then(axios.spread((obj1, obj2, obj3) => {
                console.log(obj1, obj2, obj3);
            }));

        setGameDetailsShow(true)

        // setTimeout(() => { getRandomHamsters(); }, 600);
    }

    async function updateHamsters(e) {

        if (e.target.parentElement.id === "warrior-one") {

            const winnerId = warriorOne.id
            const loserId = warriorTwo.id
            console.log("1 before", warriorOne.wins);
            const winnerPatch = {
                wins: warriorOne.wins + 1,
                games: warriorOne.games + 1
            }
            console.log("2 after", winnerPatch);
            const loserPatch = {
                defeats: warriorTwo.defeats + 1,
                games: warriorTwo.games + 1
            }
            sendUpdateRequests(winnerId, loserId, winnerPatch, loserPatch)

        } else if (e.target.parentElement.id === "warrior-two") {

            const loserId = warriorOne.id
            const winnerId = warriorTwo.id

            const winnerPatch = {
                wins: warriorTwo.wins + 1,
                games: warriorTwo.games + 1
            }
            const loserPatch = {
                defeats: warriorOne.defeats + 1,
                games: warriorOne.games + 1
            }
            sendUpdateRequests(winnerId, loserId, winnerPatch, loserPatch)
        }
    }

    useEffect(() => {
        setGameDetailsShow(false)
        update(Date.now())
        getRandomHamsters()
    }, [])

    return (

        <div className="battle-component">
            <main>

                <HamsterDisplay compId="warrior-one" hamster={warriorOne} patch={updateHamsters} reBoot={getRandomHamsters} showGame={gameDetailsShow} />

                <HamsterDisplay compId="warrior-two" hamster={warriorTwo} patch={updateHamsters} reBoot={getRandomHamsters} showGame={gameDetailsShow} />

            </main>

            <button
                onClick={() => {
                    setGameDetailsShow(false);
                    update(Date.now());
                    getRandomHamsters()
                }}
                id="next-game"
                disabled={!gameDetailsShow}>
                Nästa match
                </button>
        </div>

    )
}
export default Battle