import { Grid } from '@material-ui/core';
import React from 'react';
import "./Welcome.css"
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const StyledButton = withStyles({
    root: {
      background: '#C4C4C4',
      borderRadius: '35px',
      border: '1px solid black',
      color: 'black',
      padding: '0 30px',
      width: '15%',
      height: '80px',
      fontSize: '23px',
      margin: '50px'
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function Welcome (accessToken) {
    return (
        <div id='welcome-container'>
            <div id='welcome-message'>
                <p id="hello">Hello, <span id="name">Ives.</span></p>
            </div>
            <div>
                <Grid id='grid'>
                    <div id='minsNsongs'>
                        <StyledButton> Minutes Listened </StyledButton>
                        <StyledButton>
                            <Link to='top-songs' style={{textDecoration: 'none', color: 'black'}}>
                                Top Songs
                            </Link>
                        </StyledButton>
                    </div>
                    <div id='artistsNalbums'>
                        <StyledButton> Top Artists </StyledButton>
                        <StyledButton> Top Albums </StyledButton>
                    </div>
                </Grid>
            </div>
            
        </div>
    );
}

export default Welcome;