import axios from "axios"
import { useEffect, useState } from "react"


const WonOver = ({ loser }) => {
    const [name, setName] = useState("")

    useEffect(() => {
        function getLoser(){
            axios.get(`hamsters/${loser}`)
            .then(response => setName(response.data.name))
            .catch(function (error) {
                setName("");
                console.log(error);
            })
        }
        getLoser()
    }, [loser])

    return (
        <span>
            {name ? <span className="won-over">{name}</span> : null}
        </span>
    )
}
export default WonOver