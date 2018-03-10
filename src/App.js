import React, { Component } from 'react';
import Search from './components/Search';
import { login } from './api'
import './App.css';

class App extends Component {

	state = {
		userName: null,
		userProfile: { 
			userRepos: []
		}
	};

	render() {
		return (
			<div className="App">
				<header className="App-header">
				<div className="nav-wrapper">
					<h1>Find user GitHub</h1>
				</div>
				</header>
				<Search token={this.state.token}/>
			</div>
		);
	}
}

export default App;
