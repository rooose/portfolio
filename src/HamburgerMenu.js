import React from "react";
import Burger from 'react-css-burger';
import { Link } from "react-router-dom";
import "./App.css";
import "./Burger.css"

class HamburgerMenu extends React.Component {
    state = {
        active: false,
    };
    toggleNavbar = () => {
        this.setState({ active: !this.state.active });
    };
    render() {
        return (
            <div className="top-right hamburger-menu">
                <Burger
                    onClick={this.toggleNavbar}
                    active={this.state.active}
                    burger="squeeze"
                    color=" #555B6E"
                    hoverOpacity={0.8}
                />
                <vnav class="stroke">
                <ul className={this.state.active ? 'hamburger-content active' : 'hamburger-content'}>
                    <li>
                        <Link to='/portfolio/' className='nav-links'>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/portfolio/introduction' className='nav-links'>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to={process.env.PUBLIC_URL + "/JulietteHirigoyen_Resume.pdf"} target="_blank" download className="nav-links">Resume</Link>
                    </li>
                </ul>
                </vnav>
            </div>
        );
    }
}

export default HamburgerMenu;