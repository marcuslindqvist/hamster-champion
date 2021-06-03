import axios from 'axios'

const GalleryItem = ({ hamster, alert, alertMessage }) => {

    function deleteHamster() {
        axios.delete(`/hamsters/${hamster.id}`)
            .then(response => { setAlert(); console.log(response) });
    }

    function setAlert() {
        alertMessage(`${hamster.name} kommer nu att raderas från databasen. Hejdå ${hamster.name}`)
        alert(true)
    }
    return (
        <div
            className="gallery-item">
            <h5>{hamster.name}</h5>
            <img
                src={`http://localhost:2010/img/${hamster.imgName}`}
                alt="hamster"
                onError={(e) => { e.target.onerror = null; e.target.src = `${hamster.imgName}` }}
            />
            {/* <img
                src={hamster.imgName}
                alt="hamster"
                onError={e => e.target.style.display = 'none'}
            /> */}
            <div className="extra-details">
                <div id="text">
                    <h5>{hamster.name}</h5>
                    <ul><strong>
                        <li>Ålder: {hamster.age} år</li>
                        <li>Älskar att: {hamster.loves}</li>
                        <li>Favoritmat: {hamster.favFood}</li></strong>
                    </ul>
                </div>
                <div id="erase-btn" onClick={() => deleteHamster()}>
                    <span>Radera {hamster.name}</span><i className="far fa-trash-alt"></i>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem