import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { useEffect, useState } from 'react'
import LandingPage from "./LandingPage"
import Battle from "./Battle/Battle"
import Gallery from "./Gallery/Gallery"
import Statistics from "./Statistics/Statistics"
import History from "./History/History"

const PageContainer = () => {
    const [hamsters, setHamsters] = useState([]);
    const [update, setUpdate] = useState("")
    const [serverStatus, setServerStatus] = useState(true)
    const linkStyle = {
        marginRight: "3rem",
        textDecoration: "none",
        color: 'black'
    };

    useEffect(() => {
        async function getHamsters() {
            try {
                const response = await fetch("/hamsters", { method: "GET" });
                const data = await response.json();
                setHamsters(data);
            } catch (error) {
                setServerStatus(false)
                console.log(error.message);
            }
        }
        getHamsters();
    }, [update]);


    return (
        <div className="page-container">
            <Router >
                <nav>
                    <div id="home-link">
                        <NavLink style={linkStyle} id="link-home" to="/" activeClassName="active-nav-class"><strong>HAMSTER CHAMPION</strong></NavLink>
                    </div>

                    <div className="nav-links">
                        <NavLink
                            style={linkStyle}
                            to="/battle" activeClassName="active-nav-class">
                            <span>
                                <i className="fas fa-bahai icon"></i>
                            </span>
                            Kamp
                        </NavLink>

                        <NavLink
                            style={linkStyle}
                            to="/gallery"
                            activeClassName="active-nav-class">
                            <span>
                                <i className="far fa-image icon"></i>
                            </span>
                                Galleri
                        </NavLink>

                        <NavLink
                            style={linkStyle}
                            to="/statistics"
                            activeClassName="active-nav-class">
                            <span>
                                <i className="far fa-chart-bar icon"></i>
                            </span>
                            Statistik
                        </NavLink>

                        <NavLink
                            style={linkStyle}
                            to="/history"
                            activeClassName="active-nav-class">
                            <span>
                                <i className="fas fa-history icon"></i>
                            </span>
                            Historik
                        </NavLink>

                    </div>

                </nav>
                <div className="content-container">
                    <Switch>
                        <Route path="/battle">
                            <Battle hamsterList={hamsters} update={setUpdate} />
                        </Route>

                        <Route path="/gallery">
                            <Gallery hamsterList={hamsters} update={setUpdate} />
                        </Route>

                        <Route path="/statistics">
                            <Statistics update={setUpdate} />
                        </Route>

                        <Route path="/history">
                            <History />
                        </Route>

                        <Route path="/">
                            <LandingPage server={serverStatus} update={setUpdate} />
                        </Route>

                    </Switch>
                </div>
            </Router>

        </div>
    )
}
export default PageContainer