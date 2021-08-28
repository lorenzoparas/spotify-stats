import React from 'react';
import Button from '@material-ui/core/Button';

const clientId = '33c58056810e472dbde6aa97618d59c9';
const redirectUri = 'http://localhost:3000';
const fetchUrl = 'https://accounts.spotify.com/authorize' +
    '?client_id=' + encodeURIComponent(clientId) +
    '&response_type=token' +
    '&redirect_uri=' + encodeURIComponent(redirectUri);

const loginButtonStyle = {
    textDecoration: 'none', 
    color: 'white'
}

function Home() {
    return (
        <div>
            <Button variant="contained" color="primary">
                <a href={fetchUrl} style={loginButtonStyle}>
                    LOGIN
                </a>
            </Button>
        </div>
    );
}

export default Home;