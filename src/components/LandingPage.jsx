import CallToAction from "./Buttons/CallToAction"

const LandingPage = ({ server }) => {
    return (
        <div className="landing-page">

            {server
                ? null
                : <div className="server-error">
                    <i class="fas fa-cog fa-spin"></i>
                    <span>Servern kan inte nås just nu. Pröva att uppdatera sidan om någon minut!</span>
                </div>}
            <div className="main">
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
        </div>
    )
}
export default LandingPage