import axios from 'axios'

const GalleryItem = ({ hamster }) => {

    function deleteHamster() {
        axios.delete(`/hamsters/${hamster.id}`)
            .then(response => console.log(response));
    }

    return (
        <div
            className="gallery-item">
            <h3>{hamster.name}</h3>
            <img
                src={`http://localhost:2010/img/${hamster.imgName}`}
                alt="hamster"
            />
            <div className="extra-details">

                <ul>
                    <li>Ålder: {hamster.age}</li>
                    <li>Älskar att: {hamster.loves}</li>
                    <li>Favoritmat: {hamster.favFood}</li>
                </ul>
                <div id="erase-btn" onClick={() => deleteHamster()}>
                    <span>Radera {hamster.name}<i className="far fa-trash-alt"></i></span>
                </div>
            </div>
        </div>
    )
}

export default GalleryItem