import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./App.css";
import Home from "./Home"
import Animations from "./Animations"
import Characters from "./Characters"
import Environments from "./Environments"
import Projects from "./Projects"
import Sketches from "./Sketches"
import imageLoader from "./images"

// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends React.Component {
    constructor() {
        super();
        const photos = imageLoader()
        this.state = { width: -1, photos: photos };
    }
    render() {
        if (this.state.photos && this.state.photos.length > 0) {
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
                                <Home photos={this.state.photos}/>
                            </Route>
                            <Route path="/animations">
                                <Animations photos={this.state.photos}/>
                            </Route>
                            <Route path="/characters">
                                <Characters photos={this.state.photos}/>
                            </Route>
                            <Route path="/environments">
                                <Environments photos={this.state.photos}/>
                            </Route>
                            <Route path="/projects">
                                <Projects photos={this.state.photos}/>
                            </Route>
                            <Route path="/sketches">
                                <Sketches photos={this.state.photos}/>
                            </Route>
                        </Switch>
                    </div>
                </Router>
            );
        }
    }
}

// You can think of these components as "pages"
// in your app.

export default App;