import React, { Component } from "react";
import profileImage from "../../assets/images/ranch.png";
import Nav from "../Nav";

class About extends Component {
    render() {
        return (
            <section>
                <div className="body-container">
                    <div className="mini-container">
                        <h4 id="about">
                            After gaining experience in digital marketing and data analytics, I attended Vanderbilt University's Full-Stack Web Development Bootcamp. This six-month program develops skills in everything from made-from-scratch HTML and CSS to relational and NoSQL database management.
                        </h4>
                    </div>
                    <img
                        src={profileImage}
                        className="my-2"
                        style={{ width: "80%" }}
                        alt="cover"
                    />
                </div>
            </section>
        );
    }
}

export default About;


