import React from 'react';
import "./Body.css"
import Home from "./../Home/Home"
import Welcome from "../Welcome/Welcome"
import TopSongs from '../TopSongs/TopSongs';
import TopArtists from '../TopArtists/TopArtists'

import {
    Route,
    Switch,
} from 'react-router-dom';

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
                <Route path='/top-artists'>
                    <TopArtists accessToken={accessToken.accessToken}/>
                </Route>
            </Switch>
        </div>
    );
}

export default Body;
