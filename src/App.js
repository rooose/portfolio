import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import "./App.css";
import Header from "./Header"
import GallerySection from "./GallerySection"
import imageLoader from "./images"
import ScrollToTop from "./ScrollToTop"


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
                    <ScrollToTop>
                        <Header/>
                        <div>
                        {/*
            A <Switch> looks through all its children <Route>
            elements and renders the first one whose path
            matches the current URL. Use a <Switch> any time
            you have multiple routes, but you want only one
            of them to render at a time
            */}
                        <Switch>
                            <Route exact path="/">
                                <GallerySection photos={this.state.photos} />
                            </Route>
                            <Route path="/animations">
                                <GallerySection photos={this.state.photos.filter(e => e.type === "animation")} />
                            </Route>
                            <Route path="/characters">
                                <GallerySection photos={this.state.photos.filter(e => e.type === "character")} />
                            </Route>
                            <Route path="/environments">
                                <GallerySection photos={this.state.photos.filter(e => e.type === "environment")} />
                            </Route>
                            <Route path="/projects">
                                <GallerySection photos={this.state.photos.filter(e => e.type === "project")} />
                            </Route>
                            <Route path="/sketches">
                                <GallerySection photos={this.state.photos.filter(e => e.type === "sketch")} />
                            </Route>
                        </Switch>
                    </div>
                </ScrollToTop>
                </Router>

            );
        }
    }
}

// You can think of these components as "pages"
// in your app.

export default App;