import React, { useEffect, useState } from 'react';
import ArtistRow from '../../components/ArtistRow';

const tempStyle = {
    width: '60vw'
}

function TopArtists(accessToken) {
    const [topArtists, setTopArtists] = useState();

    // create API request for top tracks
    useEffect(() => {
        const results = fetch("https://api.spotify.com/v1/me/top/artists", {
            headers: {
                'Authorization': 'Bearer ' + accessToken.accessToken
            }
        });
        results.then(res => res.json().then(json => {
            setTopArtists(json.items);
        }));
    }, []);

    useEffect(() => {
        console.log(topArtists);
    }, [topArtists])

    return (
        <div style={tempStyle}>
            <h1 style={{color: "#62CD32"}}>Your Top Artists</h1>
            <div>
                {   
                    topArtists && topArtists.map((artist, idx) => {
                        return (
                            <ArtistRow idx={idx + 1} artistObj={artist}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TopArtists;