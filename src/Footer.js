import React from "react";
import "./Footer.css";
import { FaInstagram,
         FaFacebook,
         FaRegEnvelope } from 'react-icons/fa'

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <ul>
                    <li><a target="blank" href="https://www.instagram.com/kitkaticha/"><FaInstagram/></a></li>
                    <li><a target="blank" href="https://www.facebook.com/kathirigoyen"><FaFacebook/></a></li>
                    <li><a target="blank" href="mailto:katicha.hirigoyen@hotmail.fr"><FaRegEnvelope/></a></li>
                </ul>
            </div>
        );
    }
}

export default Footer;