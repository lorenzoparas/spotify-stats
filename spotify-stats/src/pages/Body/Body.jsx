import React from 'react';
import "./Body.css"
import Home from "./../Home/Home"
import Welcome from "../Welcome/Welcome"

import {
    Route,
    Switch,
} from 'react-router-dom';
import TopSongs from '../TopSongs/TopSongs';

function Body (accessToken) {
    return (
        <div id='body-container'>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/welcome'>
                    <Welcome accessToken={accessToken.accessToken}/>
                </Route>
                <Route path='/top-songs'>
                    <TopSongs accessToken={accessToken.accessToken}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Body;
