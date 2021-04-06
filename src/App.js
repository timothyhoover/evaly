import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './before-login/components/header/header.component';
import HomePage from './before-login/pages/home/homepage.component';
import './App.scss';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
			</Switch>
		</div>
	);
}

export default App;
