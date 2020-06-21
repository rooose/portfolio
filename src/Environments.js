import React from "react";
import LightboxGallery from "./LightboxGallery";
import "./App.css";

class Environments extends React.Component {
    render() {
        return (
            <LightboxGallery photos={this.props.photos} />
        );
    }
}

export default Environments;