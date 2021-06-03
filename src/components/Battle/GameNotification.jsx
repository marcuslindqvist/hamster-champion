import { useEffect, useState } from 'react'
const GameNotification = ({ name, setModal }) => {
    const [style, setStyle] = useState({
        width: "5em",
        height: "5em",
        borderRadius: "50%",
        color: "#33272a",
        backgroundColor: "#c3f0ca",
        padding: "2em",
        position: "absolute",
        margin: "2em 0 0 300px",
        zIndex: "20",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "opacity 500ms"
        })
        const [hurra] = useState(["Hurra!", "Jippie!", "Slay!", "Wihoo!", "Yaas!", "OMG!", "WIN!", "YES!", "Jaaa!", "BOOM!", "Ka-ching!", "O la la"])

    useEffect(() => {
        const interval = setTimeout(() => {
            setModal(false)
            setStyle({
                display: "none",
            })
        }, 1000);
        return () => clearInterval(interval)
    }, [])
    const randomScream = Math.floor(Math.random() * hurra.length);

    return (
        <div className="game-notification" style={style}>
            <h5>{hurra[randomScream]}</h5>
        </div>
    )
}
export default GameNotification