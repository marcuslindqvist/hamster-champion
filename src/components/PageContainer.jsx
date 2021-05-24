import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage"
import Battle from "./Battle/Battle"
import Gallery from "./Gallery/Gallery"

const PageContainer = () => {
    
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
                        <Link style={linkStyle} id="link-home" to="/">Hamster Champion X</Link>
                    </div>
                    <div className="nav-links">
                        <Link style={linkStyle} to="/battle">Battle</Link>
                        <Link style={linkStyle} to="/gallery">Gallery</Link>
                    </div>

                </nav>

                <Switch>

                    <Route path="/battle">
                        <Battle />
                    </Route>
                    <Route path="/gallery">
                        <Gallery />
                    </Route>
                    <Route path="/">
                        <LandingPage />
                    </Route>

                </Switch>
            </Router>

        </div>
    )
}
export default PageContainer