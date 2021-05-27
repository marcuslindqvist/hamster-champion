import GalleryItem from "./GalleryItem"
import InputModal from "./InputModal"
import {useState} from 'react'
const Gallery = ({ hamsterList }) => {
const [modalStatus, setModalStatus] = useState(false)

    return (
        <div className="gallery">
            {modalStatus ? <InputModal closeModal={setModalStatus} /> : <button onClick={() => setModalStatus(true)}>Lägg till hamster</button>}
            
            <div className="gallery-grid">
                {hamsterList.map((hamster) =>
                    <GalleryItem key={hamster.id} hamster={hamster} />
                )}

            </div>
        </div>
    )
}

export default Gallery