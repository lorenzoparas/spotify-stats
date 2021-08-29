import React, { useEffect, useState } from "react";
import {
	Switch,
	Route,
	useHistory
  } from "react-router-dom";
import "./App.css";
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TopSongs from './pages/TopSongs';

const bodyStyle = {
	marginTop: '10vh',
	marginBottom: '10vh'
}

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
		(hash) ? history.push('/dashboard') : history.push('/');
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
				<div style={bodyStyle}>
					<Switch>
						<Route exact path="/">
							<Home/>
						</Route>
						<Route path="/dashboard">
							<Dashboard accessToken={accessToken}/>
						</Route>
						<Route path='/top-songs'>
							<TopSongs accessToken={accessToken}/>
						</Route>
					</Switch>
				</div>
			</div>
		</div>
	);
}

export default App;
