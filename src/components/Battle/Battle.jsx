import { useEffect, useState } from 'react'
import HamsterDisplay from "./HamsterDisplay"
import "./Battle.css"

const Battle = ({ hamsterList }) => {
    const [warriorOne, setWarriorOne] = useState({})
    const [warriorTwo, setWarriorTwo] = useState({})

    function getRandomHamsters() {

        const first = Math.floor(Math.random() * hamsterList.length);

        let second = Math.floor(Math.random() * hamsterList.length)

        if (first === second) {
            second = Math.floor(Math.random() * hamsterList.length);
        }

        setWarriorOne(hamsterList[first])
        setWarriorTwo(hamsterList[second])
    }
    useEffect(() => {

        getRandomHamsters()
    }, [])

    return (
        <div className="battle-component">
            <h1>Vem vinner?</h1>

            <main>

                <HamsterDisplay hamster={warriorOne} />
                <HamsterDisplay hamster={warriorTwo} />

            </main>
        </div>

    )
}
export default Battle