import React from 'react';
import Button from '@material-ui/core/Button';

const clientId = '33c58056810e472dbde6aa97618d59c9';
const redirectUri = 'https%3A%2F%2Fexample.com%2F';
const fetchUrl = 'https://accounts.spotify.com/authorize' +
    '?client_id=' + clientId +
    '&response_type=code' +
    '&redirect_uri=' + redirectUri;

function Home() {

    const handleLogin = () => {
        fetch(fetchUrl);
    };

    return (
        <div>
            Spotify Stats
            <Button variant="contained" color="primary" onClick={handleLogin}>
                LOGIN
            </Button>
        </div>
    );
}

export default Home;