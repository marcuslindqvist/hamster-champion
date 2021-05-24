import { useState } from 'react'
const GalleryItem = ({ hamster }) => {
    const [selectedItem, setSelectedItem] = useState("")

    return (
        <div>
            <img
                src={`../../img/${hamster.imgName}`}
                alt="hamster"
                height="200px" />
        </div>
    )
}
export default GalleryItem