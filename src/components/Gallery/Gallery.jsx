import GalleryItem from "./GalleryItem"

const Gallery = ({ hamsterList }) => {

    return (
        <div className="gallery-grid">
            {hamsterList.map((hamster) =>
                <GalleryItem key={hamster.id} hamster={hamster} />
            )}
        </div>
    )
}

export default Gallery