const Confirmation = ({ text, confirm }) => (
    <div className="confirmation-box">
        <h3>Attention please</h3>
        <p>Är du säker på att du vill: </p>
        <p>{text}</p>
        <button onClick={() => confirm(true)}>Ja</button>
        <button onClick={() => confirm(false)}>Avbryt</button>
    </div>
)