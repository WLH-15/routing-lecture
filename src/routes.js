import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './Components/Landing';
import Contact from './Components/Contact';
import About from './Components/About';

//routes exports a Switch Component, which determines which route to display. Route is where you define the path the user needs to visit to view the route, and the component attached to that route.
export default (
    <Switch>
        <Route exact path='/' component={Landing}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
    </Switch>
)