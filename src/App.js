import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { auth, createUserProfileDocument, currentUser } from './firebase.utils';
import PrivateRoute from './private-routing/private-route.component';
import BeforeLoginRoutes from './before-login/routing/before-login-routes.component';
import Dashboard from './after-login/pages/dashboard-page/dashboard.component';
import { AuthProvider } from './context/auth-context';
import './App.scss';

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Switch>
					<BeforeLoginRoutes />
				</Switch>
				<PrivateRoute exact path="/dashboard" component={Dashboard} />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
