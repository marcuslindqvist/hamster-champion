import GalleryItem from "./GalleryItem"
import InputModal from "./InputModal"

const Gallery = ({ hamsterList }) => {

    return (
        <div className="gallery">
            <InputModal />
            <div className="gallery-grid">
                {hamsterList.map((hamster) =>
                    <GalleryItem key={hamster.id} hamster={hamster} />
                )}

            </div>
        </div>
    )
}

export default Gallery