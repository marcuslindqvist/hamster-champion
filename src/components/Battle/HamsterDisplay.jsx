import "./Battle.css"
// import axios from 'axios'
const HamsterDisplay = ({ hamster, patch, compId }) => {

    // async function updateHamster(id) {
    //     console.log("put url", `/hamsters/${id}`);

    //     const URL = `/hamsters/${id}`

    //     await axios.put(URL, { wins: 1, games: 1})
    //     .then(response => console.log(response));
    // }

    let content
    if (hamster) {
        content = <div id={compId} className="hamster-display" onClick={(e) => patch(e)}>
            <h3>{hamster.name}</h3>
            <img src={`http://localhost:2010/img/${hamster.imgName}`} alt="" />
            <ul>
                <li>Ålder: {hamster.age}</li>
                <li>Favoritmat: {hamster.favFood}</li>
                <li>Älskar att: {hamster.loves}</li>
                <li>wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}</li>
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