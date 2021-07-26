import React, { Component } from 'react';
import linkedInImage from "../../assets/images/linkedIn.png";
import { Link } from 'react-router-dom';
import Pdf from "../../assets/resume.pdf";

class Resume extends Component {
    render() {
        return (
            <div>
                <a href={Pdf} target="_blank" rel="noreferrer"><h2>Resume</h2></a>

                <Link to={{ pathname: "https://www.linkedin.com/in/bensottek/" }} target="_blanK">
                    <h2>LinkedIn Profile</h2>

                </Link>
            </div>
        )
    }
}

export default Resume;