import { useState } from 'react'
const GalleryItem = ({ hamster }) => {
    const [selectedItem, setSelectedItem] = useState("")

    function changeSelect() {
        if (selectedItem) {
            setSelectedItem("")
        } else setSelectedItem(hamster.id)
    }

    const showDetails = (
        <div>
            <ul>
                <li>Ålder: {hamster.age}</li>
                <li>Favoritmat: {hamster.favFood}</li>
                <li>Älskar att: {hamster.loves}</li>
                <li>wins: {hamster.wins} games {hamster.games} defeats {hamster.defeats}</li>
            </ul>
        </div>
    )
    
    return (
        <div onMouseEnter={changeSelect} onMouseLeave={changeSelect} className="gallery-item">
            {selectedItem ? <div >
                <strong>{hamster.name}</strong>
            </div> : <img
                    src={`http://localhost:2010/img/${hamster.imgName}`}
                alt="hamster"
                height="100px" />}
            <div >{selectedItem
                ? showDetails 
                : <span></span>
            }</div>
        </div>
    )
}

export default GalleryItem