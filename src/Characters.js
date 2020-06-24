import React from "react";
import LightboxGallery from "./LightboxGallery";
import "./App.css";

class Characters extends React.Component {
    render() {
        return (
            <div className="content">
                <LightboxGallery photos={this.props.photos} />
            </div>
        );
    }
}

export default Characters;