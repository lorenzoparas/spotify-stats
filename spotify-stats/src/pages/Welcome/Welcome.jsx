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
      width: '30%',
      height: '80px',
      fontSize: '23px',
      margin: '50px'
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

const buttonTextStyle = {
    textDecoration: 'none',
    color: 'black'
}


function Welcome (accessToken) {
    
    console.log(accessToken)
    return (
        <div id='welcome-container'>
            <div id='welcome-message'>
                <p id="hello">Hello, <span id="name">Ives.</span></p>
            </div>
            <div>
                <Grid id='grid'>
                    <div id='minsNsongs'>
                        <StyledButton> Minutes Listened </StyledButton>
                        <Link to='top-songs' style={buttonTextStyle}>
                            <StyledButton>
                                Top Songs
                            </StyledButton>
                        </Link>
                    </div>
                    <div id='artistsNalbums'>
                        <Link to='top-artists' style={buttonTextStyle}>
                            <StyledButton> 
                                Top Artists 
                            </StyledButton>
                        </Link>
                        <StyledButton> Top Albums </StyledButton>
                    </div>
                </Grid>
            </div>
            
        </div>
    );
}

export default Welcome;