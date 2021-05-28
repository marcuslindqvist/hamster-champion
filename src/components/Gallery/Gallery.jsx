import GalleryItem from "./GalleryItem"
import InputModal from "./InputModal"
import { useState } from 'react'
const Gallery = ({ hamsterList }) => {
    const [modalStatus, setModalStatus] = useState(false)
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
                <h1>GALLERI</h1>
                <p>Här kan du se alla hamstrar!</p>
                <p>Du kan också lägga till en hamster genom att klicka på knappen nedan</p>
                {modalStatus
                    ? <InputModal closeModal={setModalStatus} />
                    : <button onClick={() => setModalStatus(true)}>Lägg till hamster</button>}

                <div>
                    <h3>Det här är {selectedItem.name}!</h3>

                    <p>{selectedItem.name} är {selectedItem.age} år gammal och är en liten hamster som älskar att {selectedItem.loves}. Om {selectedItem.name} själv får välja så blir det {selectedItem.favFood} till middag.</p>
                </div>
            </div>
        </div>
    )
}

export default Gallery