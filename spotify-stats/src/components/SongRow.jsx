import React, { useEffect } from 'react';

const rowStyle = {
    display: 'flex',
    flexDirection: 'row',
    height: 'fit-content',
    marginBottom: '20px',
    backgroundColor: '#399F2E',
    padding: '16px',
    borderRadius: '12px',
    color: '#D3D3D3',
    fontWeight: 'bold',
    border: '8px solid #626363'
}

const indexStyle = {
    fontSize: '75px',
    lineHeight: '75px'
}

const textStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginLeft: '5%',
    marginBottom: '20px'
}

const imgStyle = {
    height: '100px',
    width: '100px'
}

const imgSectionStyle = {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'flex-end'
}

const infoStyle = {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 2
}

function SongRow(props) {

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div>
            <div style={rowStyle}>
                <div style={infoStyle}>
                    <div style={indexStyle}>{props.idx}.</div>
                    <div style={textStyle}>
                        <div>{props.songObj.name}</div>
                        <div style={{color: '#626363'}}>
                            {
                                props.songObj.artists
                                .map(artist => {return artist.name})
                                .join(', ')
                            }
                        </div>
                    </div>
                </div>
                <div style={imgSectionStyle}>
                    <img style={imgStyle} src={props.songObj.album.images[0].url}/>
                </div>
            </div>
        </div>
    );
}

export default SongRow;