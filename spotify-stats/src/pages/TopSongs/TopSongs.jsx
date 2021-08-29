import React, { useEffect, useState } from 'react';
import SongRow from '../../components/SongRow';

const tempStyle = {
    width: '60vw'
}

function TopSongs(accessToken) {
    const [topSongs, setTopSongs] = useState();

    // create API request for top tracks
    useEffect(() => {
        const results = fetch("https://api.spotify.com/v1/me/top/tracks", {
            headers: {
                'Authorization': 'Bearer ' + accessToken.accessToken
            }
        });
        results.then(res => res.json().then(json => {
            setTopSongs(json.items);
        }));
    }, []);

    useEffect(() => {
        console.log(topSongs);
    }, [topSongs])

    return (
        <div style={tempStyle}>
            <h1 style={{color: "#62CD32"}}>Your Top Songs</h1>
            <div>
                {   
                    topSongs && topSongs.map((song, idx) => {
                        return (
                            <SongRow idx={idx + 1} songObj={song}/>
                        );
                    })
                }
            </div>
        </div>
    );
}

export default TopSongs;