import React, { useEffect, useState } from "react";
import {
	useHistory
  } from "react-router-dom";
import "./App.css";
import Body from './pages/Body/Body';

function App() {
	let history = useHistory();
	let [hash, setHash] = useState();
	let [accessToken, setAccessToken] = useState();
	let [tokenType, setTokenType] = useState();
	let [expiresIn, setExpiresIn] = useState();

	useEffect(() => {
		if (window.location.hash.length === 0) {
			history.push('/');
		} else {
			setState(window.location.hash);
		}
	}, []);

	useEffect(() => {
		(hash) ? history.push('/welcome') : history.push('/');
	}, [hash])

	const setState = (newHash) => {
		setHash(newHash);
		const hashArr = newHash.substring(1).split('&');
		setAccessToken(decodeURIComponent(hashArr[0].split('=')[1]));
		setTokenType(decodeURIComponent(hashArr[1].split('=')[1]));
		setExpiresIn(decodeURIComponent(hashArr[2].split('=')[1]));
	};

  	return (
		<div className="App">
			<div className="App-header">
				<Body accessToken={accessToken}/>
			</div>
		</div>
	);
}

export default App;
