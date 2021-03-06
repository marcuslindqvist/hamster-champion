import { useState } from "react"
import axios from 'axios'

const InputModal = ({ alert, alertMessage }) => {
    const [hamsterName, setHamstername] = useState("hamster")
    const [newHamster, setNewHamster] = useState({
        name: "",
        age: "",
        favFood: "",
        loves: "",
        imgName: ""
    })
    const [nameTouched, setNameTouched] = useState(false)
    const [ageTouched, setAgeTouched] = useState(false)
    const [loveTouched, setLoveTouched] = useState(false)
    const [foodTouched, setFoodTouched] = useState(false)
    const [imgTouched, setImgTouched] = useState(false)

    function addHamster() {
        let newHamsterCopy = newHamster
        try {
            newHamsterCopy.age = parseInt(newHamsterCopy.age)
            console.log(newHamsterCopy);
        } catch (error) {
            console.log(error.message);
        }

        axios.post("/hamsters", newHamsterCopy)
            .then(response => {
                console.log(response.data);
            })
            .catch(function (error) {
                if (error.response) {
                    console.log(error.response);
                }
            });
        setAlert()
        clearInput()
    }
    function setAlert() {
        alertMessage(`${newHamster.name} läggs nu till i databasen. Välkommen ${newHamster.name}`)
        alert(true)
    }
    function showName(evt) {
        if (evt.target.value) {
            setHamstername(evt.target.value)
        } else (setHamstername("hamster"))
    }
    function clearInput() {
        setNewHamster({
            name: "",
            age: "",
            favFood: "",
            loves: "",
            imgName: ""
        })
    }

    const handleChange = e => {
        const { name, value } = e.target;
        setNewHamster({
            ...newHamster,
            [name]: value
        });
    };

    function checkURL(url) {
        return (url.match(/\.(jpeg|jpg|gif|png)$/) != null);
    }

    let nameIsValid = true
    let nameErrorMessage = ''
    if (newHamster.name === '') {
        nameIsValid = false
        // nameErrorMessage = 'Du har inte skrivit något namn.'
        nameErrorMessage = 'Vänligen skriv ett namn.'
    }
    let nameClass = ''
    if (nameTouched) {
        nameClass = (nameIsValid ? 'valid' : 'error')
    }


    let ageIsValid = true
    let ageErrorMessage = ''

    if (newHamster.age === "") {
        ageIsValid = false
        ageErrorMessage = 'Vänligen skriv en ålder.'
    }

    let ageClass = ''
    if (ageTouched) {
        ageClass = (ageIsValid ? 'valid' : 'error')
    }

    let loveIsValid = true
    let loveErrorMessage = ''
    if (newHamster.loves === '') {
        loveIsValid = false
        loveErrorMessage = 'Fyll i något hamstern älskar att göra.'
    }
    let loveClass = ''
    if (loveTouched) {
        loveClass = (loveIsValid ? 'valid' : 'error')
    }

    let foodIsValid = true
    let foodErrorMessage = ''
    if (newHamster.favFood === '') {
        foodIsValid = false
        foodErrorMessage = 'Fyll i något hamstern älskar att äta.'
    }
    let foodClass = ''
    if (foodTouched) {
        foodClass = (foodIsValid ? 'valid' : 'error')
    }

    let imgIsValid = true
    let imgErrorMessage = ''
    if (newHamster.imgName === '') {
        imgIsValid = false
        imgErrorMessage = 'Fyll i en bild-url'
    } else if (checkURL(newHamster.imgName) === false) {
        imgIsValid = false;
        imgErrorMessage = "Länken måste sluta på .jpeg / .jpg / .png eller .gif"
    }

    let imgClass = ''
    if (imgTouched) {
        imgClass = (imgIsValid ? 'valid' : 'error')
    }

    let formIsInvalid = !nameIsValid || !ageIsValid || !foodIsValid || !loveIsValid || !imgIsValid

    return (
        <div className="input-modal">
            {newHamster.imgName
                ? <div className="img-holder">
                    <img
                        src={newHamster.imgName} alt="hamster" />
                </div> : <div className="img-holder"><img
                    src="https://dl.dropboxusercontent.com/s/q82ax5l1ucgpqbw/hamsterFighead.png?dl=0" alt="hamster" /></div>}

            <div className="row">
                <div className="input-fields">
                    <label htmlFor="name">Namn:
                    <input
                            className={nameClass}
                            value={newHamster.name}
                            type="text"
                            name="name"
                            id="name"
                            onChange={handleChange}
                            onBlur={(evt) => { showName(evt); setNameTouched(true); }}
                        />
                    </label>
                    <label htmlFor="age">Ålder:
                    <input
                            className={ageClass}
                            type="number"
                            name="age"
                            id="age"
                            value={newHamster.age}
                            onBlur={() => setAgeTouched(true)}
                            onChange={handleChange}
                        />
                    </label>
                    <label htmlFor="loves">Älskar att:
                    <input
                            className={loveClass}
                            type="text"
                            name="loves"
                            id="loves"
                            value={newHamster.loves}
                            onChange={handleChange}
                            onBlur={() => setLoveTouched(true)}
                        />
                    </label>


                </div>

                <div className="input-fields">

                    <label htmlFor="favFood">Favoritmat:
                    <input
                            className={foodClass}
                            type="text"
                            name="favFood"
                            id="favFood"
                            value={newHamster.favFood}
                            onChange={handleChange}
                            onBlur={() => setFoodTouched(true)}
                        />
                    </label>

                    <label htmlFor="image-link">Bild-url:
                    <input
                            className={imgClass}
                            type="url"
                            name="imgName"
                            id="imgName"
                            value={newHamster.imgName}
                            onChange={handleChange}
                            onBlur={() => setImgTouched(true)} />
                    </label>

                </div>
            </div>
            {nameTouched ? <div className="message"> {nameErrorMessage} </div> : null}
            {ageTouched ? <div className="message"> {ageErrorMessage} </div> : null}
            {loveTouched ? <div className="message"> {loveErrorMessage} </div> : null}
            {foodTouched ? <div className="message"> {foodErrorMessage} </div> : null}
            {imgTouched ? <div className="message"> {imgErrorMessage} </div> : null}
            <button
                onClick={addHamster}
                disabled={formIsInvalid}>
                {`Lägg till ${hamsterName}`}
            </button>
        </div>
    )
}

export default InputModal