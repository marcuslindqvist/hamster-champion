import "./Statistics.css"
const StatsListItem = ({ hamster, index, text }) => {

    let vinstFörlust
    if (text === "vinster") {
        vinstFörlust = hamster.wins
    } else vinstFörlust = hamster.defeats

    return (
        <div className="stats-list-item">
            <div className="img-holder">
                <img
                    src={`http://localhost:2010/img/${hamster.imgName}`}
                    key={hamster.name}
                    hamster={hamster} />

            </div>
            <div className="info">
                <h5>{hamster.name}</h5>
                <span> <strong>{vinstFörlust}</strong> {text}</span>
            </div>
        </div>
    )
}
export default StatsListItem