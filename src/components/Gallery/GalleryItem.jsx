const GalleryItem = ({ hamster, displayDetails }) => {

    return (
        <div
            onClick={() => displayDetails(hamster)}
            className="gallery-item">
            <h3>{hamster.name}</h3>
            <img
                src={`http://localhost:2010/img/${hamster.imgName}`}
                alt="hamster"
            />

        </div>
    )
}

export default GalleryItem