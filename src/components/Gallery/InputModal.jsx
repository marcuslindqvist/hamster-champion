import { useState } from "react"
import axios from 'axios'

const InputModal = () => {
    const [hamsterName, setHamstername] = useState("hamster")
    const [imgUrl, setImgUrl] = useState("http://localhost:2010/img/flagster.png")
    const [newHamster, setNewHamster] = useState({
        name: "",
        age: 0,
        favFood: "",
        loves: "",
        imgName: ""
    })

    function addHamster() {
        axios.post("/hamsters", newHamster)
            .then(response => {
                console.log(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                }
            });

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
    function handleImg(e) {
        if (e.target.value) {
            setImgUrl(e.target.value)
        } else setImgUrl("http://localhost:2010/img/flagster.png")
    }
    return (
        <div className="input-modal">
            <img src={imgUrl} alt="hamster" />
            <div className="row">
                
                <div className="input-fields">
                    <label htmlFor="name">Namn:
                    <input
                            value={newHamster.name}
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            onBlur={(evt) => showName(evt)}
                        />
                    </label>
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


                </div>
                
                <div className="input-fields">
                    
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
                            name="imgName"
                            id="imgName"
                            onChange={handleChange}
                            onBlur={(e) => handleImg(e)} />
                    </label>

                    


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