import axios from 'axios'
import { useState } from 'react';
import WonOver from "./WonOver"

const GalleryItem = ({ hamster, alert, alertMessage }) => {
    const [defeated, setDefeated] = useState([])

    function deleteHamster() {
        axios.delete(`/hamsters/${hamster.id}`)
            .then(response => { setAlert() });
    }

    function setAlert() {
        alertMessage(`${hamster.name} kommer nu att raderas från databasen. Hejdå ${hamster.name}`)
        alert(true)
    }

    function matchWinners() {
        axios.get(`/matchWinners/${hamster.id}`)
            .then(response => setDefeated(response.data))
    }

    let loserIdList = defeated.map(match => match.loserId)

    let uniqueLoserIdList = [...new Set(loserIdList)];

    return (

        <div
            className="gallery-item">
            <h5>{hamster.name}</h5>
            <img
                src={`img/${hamster.imgName}`}
                alt="hamster"
                onError={(e) => { e.target.onerror = null; e.target.src = `${hamster.imgName}` }}
            />

            <div className="extra-details">
                <div id="text">
                    <h5>{hamster.name}</h5>
                    <ul><strong>
                        <li>Ålder: {hamster.age} år</li>
                        <li>Älskar att: {hamster.loves}</li>
                        <li>Favoritmat: {hamster.favFood}</li></strong>
                    </ul>
                </div>

                <div onClick={() => matchWinners()} className="match-winners">
                    Har besegrat + {uniqueLoserIdList.map(loser => <WonOver key={loser} loser={loser} />)}
                </div>

                <div id="erase-btn" onClick={() => deleteHamster()}>
                    <span>Radera {hamster.name}</span><i className="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem