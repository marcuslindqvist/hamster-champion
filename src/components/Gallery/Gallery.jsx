import { useEffect, useState } from 'react'
import GalleryItem from "./GalleryItem"

const Gallery = () => {
    useEffect(() => {
        async function getHamsters() {
            const response = await fetch('/hamsters', { method: 'GET' })
            const data = await response.json()
            console.log(data);
            setHamsters(data)
        }

        getHamsters()
    }, [])

    const [hamsters, setHamsters] = useState([])

    return (
        <div className="gallery-grid">
            {hamsters.map((hamster) =>
                <GalleryItem key={hamster.id} hamster={hamster} />
            )}
        </div>
    )
}

export default Gallery