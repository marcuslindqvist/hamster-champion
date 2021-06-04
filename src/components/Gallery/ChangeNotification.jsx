import { useEffect, useState } from 'react'

const ChangeNotification = ({ alert, text }) => {
    const [style, setStyle] = useState({
        position: "absolute",
        top: "0",
        left: "0",
        bottom: "0",
        right: "0",
        width: "100%",
        height: "60px",
        gridRow: "2",
        gridColumn: "2",
        backgroundColor: "#ffc6c7",
        zIndex: "20",
        border: "2px solid #33272a",
        marginTop: "3em",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    })
    useEffect(() => {
        const interval = setTimeout(() => {
            alert(false)
            setStyle({
                display: "none",
            })
        }, 2000);
        return () => clearInterval(interval)
    }, [])
    return (
        <div className="update-notification" style={style}>
            <span><strong>{text}</strong></span>
        </div>
    )
}
export default ChangeNotification