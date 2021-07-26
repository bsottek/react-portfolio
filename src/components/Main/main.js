import React from 'react';
import About from '../About';
import Portfolio from '../Portfolio';
import Resume from '../Resume';
import ContactForm from '../Contact';
import Header from '../Header';
import { Switch, Route } from 'react-router-dom';


const Main = () => (
    <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/header" component={Header} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={ContactForm} />
    </Switch>
)

export default Main;