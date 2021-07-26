import React, { Component } from "react";
import finalProject from "../../assets/images/final-project.png"
import passwordGenerator from "../../assets/images/password-generator.png";
import workdayScheduler from "../../assets/images/workday-scheduler.png"
import budgetTracker from "../../assets/images/budget-tracker.png";
import dogMaps from "../../assets/images/dog-maps.png";
import devtrax from "../../assets/images/devtrax.png";
import codeQuiz from "../../assets/images/code-quiz.png";
import { Link } from 'react-router-dom';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <h2 id="portfolio">Here are some of the projects I've worked on in my recent bootcamp.</h2>
                <div id="portfolio" className="my-2">
                    <Link to={{ pathname: "https://quiet-woodland-22294.herokuapp.com/" }} target="_blank">
                        <h3>Augmented Retail</h3>
                        <img
                            src={finalProject}
                            className="my-2"
                            style={{ width: "60%" }}
                            alt="project 1"
                        />
                    </Link>
                    <br />
                    <br />
                    <br />
                    <Link to={{ pathname: "https://bsottek.github.io/password-generator/" }} target="_blank">
                        <h3>Password Generator</h3>
                        <img
                            src={passwordGenerator}
                            className="my-2"
                            style={{ width: "60%" }}
                            alt="project 1"
                        />
                    </Link>
                    <br />
                    <br />
                    <br />
                    <Link to={{ pathname: "https://bsottek.github.io/work-scheduler/" }} target="_blank">
                        <h2>Workday Scheduler</h2>
                        <img
                            src={workdayScheduler}
                            className="my-2"
                            style={{ width: "60%" }}
                            alt="project 2"
                        />
                    </Link>
                    
                    <br />
                    <br />
                    <br />
                    <Link to={{ pathname: "https://obscure-brushlands-25184.herokuapp.com/" }} target="_blank">
                        <h2>Budget Tracker</h2>
                        <img
                            src={budgetTracker}
                            className="my-2"
                            style={{ width: "60%" }}
                            alt="project 3"
                        />
                    </Link>
                    
                    <br />
                    <br />
                    <br />
                    <Link to={{ pathname: "https://github.com/bsottek/dog-maps" }} target="_blank">
                        <h2>Dog-Maps</h2>
                        <img
                            src={dogMaps}
                            className="my-2"
                            style={{ width: "60%" }}
                            alt="project 4"
                        />
                    </Link>
                    
                    <br />
                    <br />
                    <br />
                    <Link to={{ pathname: "https://infinite-shore-33875.herokuapp.com/" }} target="_blank">
                        <h2>Devtrax - Freelancer Contract Handling</h2>
                        <img
                            src={devtrax}
                            className="my-2"
                            style={{ width: "60%" }}
                            alt="project 5"
                        />
                    </Link>
                    <br />
                    <br />
                    <br />
                    <Link to={{ pathname: "https://bsottek.github.io/code-quiz/" }} target="_blank">
                        <h2>Coding Quiz</h2>
                        <img
                            src={codeQuiz}
                            className="my-2"
                            style={{ width: "60%" }}
                            alt="project 6"
                        />
                    </Link>
                    
                </div>
            </div>
        );
    }
}

export default Portfolio;