import { useState } from "react"
import "./Battle.css"
import GameNotification from "./GameNotification"

const HamsterDisplay = ({ hamster, patch, compId, reBoot, showGame }) => {
    const [modalStatus, setModalStatus] = useState(false)
    

    if (!hamster) {
        reBoot(Date.now())
    }
    let content

    if (hamster) {
        content = <div id={compId} className="hamster-display" onClick={(e) => { patch(e); setModalStatus(true); }}>

            {modalStatus ? <GameNotification name={hamster.name} setModal={setModalStatus} /> : (null)}
            <h4>{hamster.name}</h4>
            <img
                src={`http://localhost:2010/img/${hamster.imgName}`}
                alt="hamster"
                onError={(e) => { e.target.onerror = null; e.target.src = `${hamster.imgName}` }}
            />
            {showGame ? <strong>
                <ul className="game-details">
                    <li>Antal matcher: {hamster.games}</li>
                    <li>Vinster: {hamster.wins}</li>
                    <li>Förluster: {hamster.defeats}</li>
                </ul>
            </strong> : <strong>
                <ul className="hamster-details">
                    <li>Ålder: {hamster.age} år</li>
                    <li>Favoritmat: {hamster.favFood}</li>
                    <li>Älskar att: {hamster.loves}</li>
                </ul>
            </strong>}            
        </div>;
    } else {
        content = <div className="hamster-display" > Is Loading...</div>;
    }
    return (
        <div>{content}</div>
    )
}

export default HamsterDisplay