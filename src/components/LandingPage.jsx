import CallToAction from "./Buttons/CallToAction"

const LandingPage = () => {
    return (
        <div className="landing-page">
            <section className="left-box">
                <section className="text">
                    <h1>Hej<br /> kompis!</h1>
                    
                    <p>Det är dags att sätta stopp för fula och tråkiga hamstrar en gång för alla!</p>
                    
                </section>
                <CallToAction buttonText="Join the quest" />
            </section>
            <section className="right-box">
                <img src="/img/flagster.png" alt="" />
            </section>



        </div>
    )
}
export default LandingPage