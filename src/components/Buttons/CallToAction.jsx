import "./Buttons.css"

const CallToAction = ({ buttonText, counter, setCounter }) => (
    <button onClick={() => setCounter(counter + 1)} className="call-to-action">
        <strong>{buttonText}</strong>
    </button>
)


export default CallToAction