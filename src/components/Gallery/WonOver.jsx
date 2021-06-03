import axios from "axios"
import { useEffect, useState } from "react"


const WonOver = ({ loser }) => {
    const [name, setName] = useState("")

    useEffect(() => {
        axios.get(`hamsters/${loser}`)
            .then(response => setName(response.data.name))
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <span>
            {name ? <span className="won-over">{name}</span> : null}
        </span>
    )
}
export default WonOver