import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <p>Juliette Hirigoyen</p>
                    </header>
                </div>
                <div>
                    <div className="Menu">
                        <div className="table">
                            <ul id="horizontal-list">
                                <li>
                                    <Link to="/">All</Link>
                                </li>
                                <li>  •  </li>
                                <li>
                                    <Link to="/animations">animations</Link>
                                </li>
                                <li>  •  </li>
                                <li>
                                    <Link to="/characters">characters</Link>
                                </li>
                                <li>  •  </li>
                                <li>
                                    <Link to="/environments">environments</Link>
                                </li>
                                <li>  •  </li>
                                <li>
                                    <Link to="/projects">projects</Link>
                                </li>
                                <li>  •  </li>
                                <li>
                                    <Link to="/sketches">sketches</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;