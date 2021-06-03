import GalleryItem from "./GalleryItem"
import InputModal from "./InputModal"
import { useState } from 'react'
const Gallery = ({ hamsterList }) => {
    const [selectedItem, setSelectedItem] = useState({})

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {hamsterList.map((hamster) =>
                    <GalleryItem
                        key={hamster.id}
                        hamster={hamster}
                        displayDetails={setSelectedItem}
                    />
                )}
            </div>

            <div className="right-box">
                <h4>Lägg till en hamster</h4>
                <InputModal />

            </div>
        </div>
    )
}

export default Gallery