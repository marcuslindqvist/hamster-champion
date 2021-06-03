import "./Statistics.css"
const StatsListItem = ({ hamster, text, showResult }) => {

    let vinstFörlust
    if (text === "vinster") {
        vinstFörlust = hamster.wins
    } else vinstFörlust = hamster.defeats

    if (showResult === undefined) {
        showResult = true;
    }
    return (
        <div className="stats-list-item">
            <div className="img-holder">
                <img
                    src={`http://localhost:2010/img/${hamster.imgName}`}
                    onError={(e) => { e.target.onerror = null; e.target.src = `${hamster.imgName}` }}
                    key={hamster.name}
                    hamster={hamster}
                    alt="hamster" />

            </div>
            <div className="info">
                <h5>{hamster.name}</h5>
                {showResult ? <span> <strong>{vinstFörlust}</strong> {text}</span> : null}
            </div>
        </div>
    )
}
export default StatsListItem