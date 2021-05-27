import { useState } from "react"
import CallToAction from "../Buttons/CallToAction"

const InputModal = ({ closeModal }) => {
    const [hamsterName, setHamstername] = useState("hamster")
    const [imgUrl, setImgUrl] = useState("http://localhost:2010/img/flagster.png")

    async function addHamster() {

    }
    function showName(evt) {
        if (evt.target.value) {
            setHamstername(evt.target.value)
        } else (setHamstername("hamster"))
    }
    return (
        <div className="input-modal">
            <div className="row">
                <div className="input-fields">
                    <label htmlFor="name">Namn:</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        onBlur={(evt) => showName(evt)}
                        required />

                    <label htmlFor="age">Ålder:</label>
                    <input
                        type="number"
                        name="age"
                        id="age"
                        required />

                    <label htmlFor="loves">Älskar att:</label>
                    <input
                        type="text"
                        name="loves"
                        id="loves"
                        required />

                    <label htmlFor="favFood">Favoritmat:</label>
                    <input
                        type="text"
                        name="favFood"
                        id="favFood"
                        required />

                    <label htmlFor="image-link">Bild-url:</label>
                    <input
                        type="url"
                        name="image-link"
                        id="image-link"
                        onBlur={(e) => setImgUrl(e.target.value)} required />
                </div>
                <div className="input-fields">


                    <img src={imgUrl} />


                </div>
            </div>
            <CallToAction
                buttonText={`Lägg till ${hamsterName}`}
                onClick={addHamster} />
            <button onClick={() => closeModal(false)}>Stäng</button>
        </div>
    )
}

export default InputModal