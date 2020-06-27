import React from "react";
import "./Intro.css";
import selfie from "./art/waw.jpg"

class Introduction extends React.Component {
    render() {
        return (
            <div className="intro">
                <div className="single-row vcenter">
                    <div className='left-column'>
                        <div className='border'>
                            <img className='selfie' src={selfie} alt="A selfie of me :)" />
                        </div>
                    </div>
                    <div className='description right-column'>
                        <div className='title'>
                            <span>Hi, I'm Juliette!</span>
                        </div>
                        <div className='about-me'>
                            It's currently my second year officially studying 2D art, but I've been drawing for much longer. I love to participate in GameJams, design environments, and design my party's DnD characters!
                            I also do commissions, so hit me up and we can discuss what I can do for you :)
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Introduction;