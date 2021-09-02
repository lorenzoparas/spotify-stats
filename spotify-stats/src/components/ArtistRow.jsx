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
    fontSize : '35px',
    marginTop: '2.5%',
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

function ArtistRow(props) {

    useEffect(() => {
        console.log(props);
    }, []);

    return (
        <div>
            <div style={rowStyle}>
                <div style={infoStyle}>
                    <div style={indexStyle}>{props.idx}.</div>
                    <div style={textStyle}>
                        <div>{props.artistObj.name}</div>
                    </div>
                </div>
                <div style={imgSectionStyle}>
                    <img style={imgStyle} src={props.artistObj.images[0].url}/>
                </div>
            </div>
        </div>
    );
}

export default ArtistRow;