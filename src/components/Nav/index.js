import React, { Component } from 'react';
//import Link from 'react-router-dom';


class Nav extends Component {
    render() {
        return (
            <header>
                <h2 id="title">
                    <a href="/about">
                        <span role="img" aria-label="camera"></span> Ben Sottek
                    </a>
                </h2>
                <nav>
                    <ul className="flex-row">
                        <li className="mx-2">
                            <a href="/about">
                                About
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="/portfolio">
                                Portfolio
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="/contact">
                                Resume
                            </a>
                        </li>
                        <li className="mx-2">
                            <a href="/contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}

export default Nav;
