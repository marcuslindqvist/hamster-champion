import { useState } from "react"
import CallToAction from "./Buttons/CallToAction"
const LandingPage = ({ server, update }) => {
    const [counter, setCounter] = useState(0)
    const [buttonText] = useState([
        "Räkna med mig", "Nästa", "Börja om guiden"
    ])

    let content

    if (counter == 0) {
        content =
            < section className="text" >
                <h1>Hej<br />kompis!</h1>

                <h5>Sätt stopp för fula och tråkiga hamstrar</h5>

            </section >
    } else if (counter == 1) {
        content =
            <section className="text">
                <h1>Börja<br />battla!</h1>
                <h5>Under battle-fliken möts hamstrarna i duell.</h5>
                <h5>Klicka på den du tycker är gulligast. Vinnarna klättrar i ranking och du kan följa din favorit!</h5>
            </section>
    } else if (counter == 2) {
        content =
            <section className="text">
                <h1>Se<br />och lär</h1>
                <h5>I galleri-vyn kan du bläddra bland alla hamstrar och lära dig mer om dem.<br />
                Nu är du redo att köra!</h5>
            </section>

    } else if (counter > 2) {
        setCounter(0)
    }

    return (
        <div className="landing-page">

            {server
                ? null
                : <div className="server-error">
                    <i class="fas fa-cog fa-spin"></i>
                    <span>
                        Problem med att nå servern... Prova att uppdatera sidan!
                        </span>

                </div>}
            <div className="main-one">
                {content}
                <CallToAction buttonText={buttonText[counter]} setCounter={setCounter} counter={counter} />

            </div>
        </div>
    )
}
export default LandingPage