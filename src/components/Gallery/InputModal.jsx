import { useState } from "react"

const InputModal = ({ closeModal }) => {
    const [hamsterName, setHamstername] = useState("hamster")
    const [imgUrl, setImgUrl] = useState("http://localhost:2010/img/flagster.png")
    const [newHamster, setNewHamster] = useState({
        name: "",
        age: 0,
        favFood: "",
        loves: "",
        imgName: ""
    })

    async function addHamster() {

    }

    function showName(evt) {
        if (evt.target.value) {
            setHamstername(evt.target.value)
        } else (setHamstername("hamster"))
    }
    const handleChange = e => {
        const { name, value } = e.target;
        setNewHamster({
            ...newHamster,
            [name]: value
        });
    };

    return (
        <div className="input-modal">
            <div className="row">
                <div className="input-fields">
                    <label htmlFor="name">Namn:</label>
                    <input
                        value={newHamster.name}
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        onBlur={(evt) => showName(evt)}
                    />
                    <label htmlFor="age">Ålder:
                    <input
                            type="number"
                            name="age"
                            id="age"
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="loves">Älskar att:
                    <input
                            type="text"
                            name="loves"
                            id="loves"
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="favFood">Favoritmat:
                    <input
                            type="text"
                            name="favFood"
                            id="favFood"
                            onChange={handleChange}
                        />
                    </label>

                    <label htmlFor="image-link">Bild-url:
                    <input
                            type="url"
                            name="image-link"
                            id="image-link"
                            onChange={handleChange}
                            onBlur={(e) => setImgUrl(e.target.value)} />
                    </label>
                </div>
                <div className="input-fields">


                    <img src={imgUrl} alt="hamster" />


                </div>
            </div>
            <button
                onClick={addHamster}>
                {`Lägg till ${hamsterName}`}
            </button>
        </div>
    )
}

export default InputModal