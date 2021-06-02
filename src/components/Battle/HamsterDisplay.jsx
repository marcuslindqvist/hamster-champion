import { useState } from "react"
import "./Battle.css"
import GameNotification from "./GameNotification"

const HamsterDisplay = ({ hamster, patch, compId, reBoot }) => {
    const [modalStatus, setModalStatus] = useState(false)
    if (!hamster) {
        reBoot()
    }
    let content

    if (hamster) {
        content = <div id={compId} className="hamster-display" onClick={(e) => { patch(e); setModalStatus(true); }}>
            
            {modalStatus ? <GameNotification name={hamster.name} setModal={setModalStatus} /> : (null)}
            <h4>{hamster.name}</h4>
            <img
                src={`http://localhost:2010/img/${hamster.imgName}`}
                alt="hamster"
                onError={e => e.target.style.display = 'none'}
            />
            <img
                src={hamster.imgName}
                alt="hamster"
                onError={e => e.target.style.display = 'none'}
            />
            <ul>
                <li>Ålder: {hamster.age} år</li>
                <li>Favoritmat: {hamster.favFood}</li>
                <li>Älskar att: {hamster.loves}</li>
            </ul>
        </div>;
    } else {
        content = <div className="hamster-display" > Is Loading...</div>;
    }
    return (
        <div>{content}</div>
    )
}

export default HamsterDisplay