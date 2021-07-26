import React from 'react';
import profilePic from '../../assets/images/new_profile.png';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function About() {
    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Image src={profilePic} alt="profile" width="200" height="200" roundedCircle />
            </Row>
            <Row>
                <h1 className="text-primary ml-5" id="about">👋 About Me</h1>
            </Row>
            <Row>
                <div>
                    <p className="text-primary">
                        After gaining experience in digital marketing and data analytics, Ben attended Vanderbilt University's Full-Stack Web Development Bootcamp. This six-month program develops skills in everything from made-from-scratch HTML and CSS to relational and NoSQL database management.
                    </p>
                </div>
            </Row>
        </Container>
    );
}

export default About;