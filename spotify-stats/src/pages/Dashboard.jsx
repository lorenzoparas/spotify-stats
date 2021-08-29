import React from 'react';
import Button from '@material-ui/core/Button';
import {
	Link
  } from "react-router-dom";

const buttonStyle = {
    textDecoration: 'none', 
    color: 'white'
}

function Dashboard(accessToken) {
    return (
        <div>
            <Button variant="contained" color="primary">
                <Link to="/top-songs" style={buttonStyle}>
                    Top Songs
                </Link>
            </Button>
        </div>
    );
}

export default Dashboard;