import CallToAction from "./Buttons/CallToAction"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <h1>SUCH ADORABLE WOW</h1>
            <p>Det är dags att sätta stopp för fula och tråkiga hamstrar en gång för alla!</p>
            <p>Ta ditt ansvar och börja rösta fram söta och gulliga hamstrar nu på en gång. I varje battle väljer du den hamster du tycker är gulligast</p>
            <p>I galleriet kan du enkelt få en överblick över de hamstrar som är med och tävlar. Du kan enkelt lägga till en ny hamster eller välja att ta bort en som helt enkelt är för ful och tråkig.</p>

            <CallToAction buttonText="Join the quest" />
            <img src="/img/flagster.png" alt="" />
        </div>
    )
}
export default LandingPage