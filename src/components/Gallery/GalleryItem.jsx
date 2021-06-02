import axios from 'axios'

const GalleryItem = ({ hamster }) => {

    function deleteHamster() {
        axios.delete(`/hamsters/${hamster.id}`)
            .then(response => console.log(response));
    }

    return (
        <div
            className="gallery-item">
            <h5>{hamster.name}</h5>
            <img
                src={`http://localhost:2010/img/${hamster.imgName}`}
                alt="hamster"
                onError={e => e.target.style.display = 'none'}
            />
            <img
                src={hamster.imgName}
                alt="hamster"
                onError={e => e.target.style.display = 'none'}
            />
            <div className="extra-details">
                <div id="text">
                    <h5>{hamster.name}</h5>
                    <ul>
                        <li>Ålder: {hamster.age} år</li>
                        <li>Älskar att: {hamster.loves}</li>
                        <li>Favoritmat: {hamster.favFood}</li>
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