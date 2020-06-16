import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./App.css";
import LightboxGallery from "./LightboxGallery";

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function App() {
    return (
        <Router>
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
                                <Link to="/animations">Animations</Link>
                            </li>
                            <li>  •  </li>
                            <li>
                                <Link to="/characters">characters</Link>
                            </li>
                            <li>  •  </li>
                            <li>
                                <Link to="/environments">characters</Link>
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
                <hr />

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/animations">
                        <Animations />
                    </Route>
                    <Route path="/characters">
                        <Characters />
                    </Route>
                    <Route path="/environments">
                        <Environments />
                    </Route>
                    <Route path="/projects">
                        <Projects />
                    </Route>
                    <Route path="/sketches">
                        <Sketches />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <LightboxGallery photos={this.state.photos.slice(60, 75)} />
    );
}

function Animations() {
    return (
        <div>
            <h2>Show animations</h2>
        </div>
    );
}

function Characters() {
    return (
        <div>
            <h2>Show characters</h2>
        </div>
    );
}

function Environments() {
    return (
        <div>
            <h2>Show environments</h2>
        </div>
    );
}

function Projects() {
    return (
        <div>
            <h2>Show projects</h2>
        </div>
    );
}

function Sketches() {
    return (
        <div>
            <h2>Show Sketches</h2>
        </div>
    );
}