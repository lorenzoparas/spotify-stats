import React from 'react';
import "./Home.css"
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const clientId = '33c58056810e472dbde6aa97618d59c9';
const redirectUri = 'https%3A%2F%2Fexample.com%2F';
const fetchUrl = 'https://accounts.spotify.com/authorize' +
    '?client_id=' + clientId +
    '&response_type=code' +
    '&redirect_uri=' + redirectUri;

    
const StyledButton = withStyles({
    root: {
      background: '#62CD32',
      borderRadius: '20px',
      border: 0,
      color: 'black',
      padding: '0 30px',
      width: '95px',
      height: '35px',
    },
    label: {
      textTransform: 'capitalize',
    },
  })(Button);

function Home() {

    const handleLogin = () => {
        fetch(fetchUrl);
    };

    return (
        <div id="main">
            <span className="title" id="spot1">
                Spotify 
            </span>
            <span className="title">
                Stats
            </span>
            <div id="appInfo">
                Spotify Stats presents to you an easy way of monitoring and accessing your spotify activity. Find which songs, artists and albums you listen to the most and how your taste in music has evolved. 
                Just login with your Spotify account to get started.
            </div>
            
            <div id="loginButton">
                <StyledButton onClick={handleLogin}> LOGIN </StyledButton>
            </div>
        </div>
    );
}

export default Home;