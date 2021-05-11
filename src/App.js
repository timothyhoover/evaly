import React from 'react';
import { Switch } from 'react-router-dom';
import PrivateRoute from './private-routing/private-route.component';
import BeforeLoginRoutes from './before-login/routing/before-login-routes.component';
import Dashboard from './after-login/pages/dashboard-page/dashboard.component';
import EvalQuizPage from './after-login/pages/eval-quiz-page/eval-quiz-page.component';
import { AuthProvider } from './context/auth-context';
import './App.scss';

function App() {
	return (
		<AuthProvider>
			<Switch>
				<BeforeLoginRoutes />
			</Switch>
			<PrivateRoute path="/dashboard" component={Dashboard} />
			<PrivateRoute path="/eval-quiz" component={EvalQuizPage} />
		</AuthProvider>
	);
}

export default App;
