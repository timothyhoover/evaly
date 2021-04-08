import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './before-login/components/header/header.component';
import Footer from './before-login/components/footer/footer.component';
import HomePage from './before-login/pages/home/homepage.component';
import LearnMorePage from './before-login/pages/learn-more/learn-more-page.component';
import './App.scss';

function App() {
	return (
		<div>
			<Header />
			<Switch>
				<Route exact path="/" component={HomePage} />
				<Route path="/learn-more" component={LearnMorePage} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
