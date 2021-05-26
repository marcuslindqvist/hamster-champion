
import "./Battle.css"

const HamsterDisplay = ({ hamster }) => {

    async function updateHamster(id) {
        console.log("put url", `/hamsters/${id}`);

        const request = {
            method: 'PUT',
            body: { wins: 1, games: 1}
        }
        const URL = `/hamsters/${id}`
        const response = await fetch(URL, request)

        if(response.status !== 200){
        console.log("FEL PÅ REQUEST")
        } else{ console.log(response);}
    
    }

    let content
    if (hamster) {
        content = <div className="hamster-display" onClick={() => updateHamster(hamster.id)}>
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
        content = <div> Is Loading...</div>;
    }
    return (
        <div>{content}</div>
    )
}

export default HamsterDisplay