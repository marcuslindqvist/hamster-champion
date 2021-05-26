import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage"
import Battle from "./Battle/Battle"
import Gallery from "./Gallery/Gallery"

const PageContainer = ({ hamsterList }) => {

    const linkStyle = {
        marginRight: "3rem",
        textDecoration: "none",
        color: 'black'
    };

    return (
        <div className="page-container">
            <Router >
                <nav>
                    <div id="home-link">
                        <Link style={linkStyle} id="link-home" to="/"><span className="dot"></span>Hamster Champion</Link>
                    </div>

                    <div className="nav-links">
                        <Link style={linkStyle} to="/battle"><span className="dot"></span>Battle</Link>

                        <Link style={linkStyle} to="/gallery"><span className="dot"></span>Gallery</Link>

                        <Link style={linkStyle} to="/statistics"><span className="dot"></span>Statistics</Link>

                        <Link style={linkStyle} to="/history"><span className="dot"></span>History</Link>

                    </div>

                </nav>
                <div className="content-container">
                    <Switch>

                        <Route path="/battle">
                            <Battle hamsterList={hamsterList} />
                        </Route>

                        <Route path="/gallery">
                            <Gallery hamsterList={hamsterList} />
                        </Route>

                        <Route path="/">
                            <LandingPage />
                        </Route>

                    </Switch>
                </div>
            </Router>

        </div>
    )
}
export default PageContainer