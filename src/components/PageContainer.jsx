import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import LandingPage from "./LandingPage"
import Battle from "./Battle/Battle"
import Gallery from "./Gallery/Gallery"
import Statistics from "./Statistics/Statistics"
import History from "./History/History"

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
                        <NavLink style={linkStyle} id="link-home" to="/" activeClassName="active-nav-class"><strong>HAMSTER CHAMPION</strong></NavLink>
                    </div>

                    <div className="nav-links">
                        <NavLink style={linkStyle} to="/battle" activeClassName="active-nav-class"><span className="dot"></span>Battle</NavLink>

                        <NavLink style={linkStyle} to="/gallery" activeClassName="active-nav-class"><span className="dot"></span>Gallery</NavLink>

                        <NavLink style={linkStyle} to="/statistics" activeClassName="active-nav-class"><span className="dot"></span>Statistics</NavLink>

                        <NavLink style={linkStyle} to="/history" activeClassName="active-nav-class"><span className="dot"></span>History</NavLink>

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
                        
                        <Route path="/statistics">
                            <Statistics />
                        </Route>
                        
                        <Route path="/history">
                            <History />
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