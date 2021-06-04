import GalleryItem from "./GalleryItem"
import InputModal from "./InputModal"
import ChangeNotification from "./ChangeNotification"
import { useEffect, useState } from 'react'
const Gallery = ({ hamsterList, update }) => {
    const [alertChange, setAlertChange] = useState(false)
    const [alertMessage, setAlertMessage] = useState("")
    useEffect(() => {
        const start = Date.now()
        update(start)
    }, [alertMessage, update]);

    return (
        <div className="gallery">
            <div className="gallery-grid">
                {alertChange
                    ? <ChangeNotification alert={setAlertChange} text={alertMessage} />
                    : null}
                {hamsterList.map((hamster) =>
                    <GalleryItem
                        key={hamster.id}
                        hamster={hamster}
                        alert={setAlertChange}
                        alertMessage={setAlertMessage}

                    />
                )}
            </div>

            <div className="right-box">
                <h4>Lägg till en hamster</h4>
                <InputModal alert={setAlertChange}
                    alertMessage={setAlertMessage} />

            </div>
        </div>
    )
}

export default Gallery