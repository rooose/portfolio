import React from "react";
import { Link } from "react-router-dom";
import "./App.css"
import "./Menu.css"
import HamburgerMenu from "./HamburgerMenu";

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <div className="App">
                    <header className="App-header">
                        <p>Juliette Hirigoyen</p>
                    </header>
                </div>
                <HamburgerMenu/>
                <nav class="stroke">
                    <ul id="horizontal-list">
                        <li>
                            <Link to="/portfolio/">All</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/animations">animations</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/characters">characters</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/environments">environments</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/projects">projects</Link>
                        </li>
                        <li>
                            <Link to="/portfolio/sketches">sketches</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Header;