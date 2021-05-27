import { useState } from "react"
import CallToAction from "../Buttons/CallToAction"

const InputModal = () => {
    const [hamsterName, setHamstername] = useState("hamster")
    const [imgUrl, setImgUrl] = useState("http://localhost:2010/img/flagster.png")
    async function addHamster() {

    }
    function showName(evt) {
        if (evt.target.value) {
            setHamstername(evt.target.value)
        } else(setHamstername("hamster"))
    }
    return (
        <div className="input-modal">
            <div className="row">
                <div className="input-fields">
                    <label for="name">Namn:</label>
                    <input type="text" name="name" id="" onBlur={(evt) => showName(evt)} />

                    <label for="age">Ålder:</label>
                    <input type="number" name="age" id="" />

                    <label for="loves">Älskar att:</label>
                    <input type="text" name="loves" id="" />

                    <label for="favFood">Favoritmat:</label>
                    <input type="text" name="favFood" id="" />

                    <label for="image-link">Bild-url:</label>
                    <input type="url" name="image-link" onBlur={(e) => setImgUrl(e.target.value)} />
                </div>
                <div className="input-fields">


                    <img src={imgUrl} />


                </div>
            </div>
            <CallToAction
                buttonText={`Lägg till ${hamsterName}`}
                onClick={addHamster} />
        </div>
    )
}

export default InputModal