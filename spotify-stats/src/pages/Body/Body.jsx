import React from 'react';
import "./Body.css"
import Home from "./../Home/Home"
import Welcome from "./../WelcomeStats/Welcome"

import {
    BrowserRouter,
    Route,
    Switch,
} from 'react-router-dom';

function Body () {
    return (
        <div id='body-container'>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/'>
                        <Home/>
                    </Route>
                    <Route path='/welcome'>
                        <Welcome/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Body;
