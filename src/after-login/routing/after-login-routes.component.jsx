import React from 'react';

import { Route, Switch } from 'react-router-dom';
import HomeDashboard from '../components/dashboard-components/home/home-dashboard.component';
import Eval from '../components/dashboard-components/eval/eval.component';
import Practice from '../components/dashboard-components/practice/practice.component';
import AccountSettings from '../components/dashboard-components/account-settings/account-settings.component';
import ProfilePicSettings from '../components/dashboard-components/profile-pic-settings/profile-pic.component';
import PersonalSettings from '../components/dashboard-components/personal-settings/personal-settings.component';
import { useUser } from '../../context/user-context';

const AfterLoginRoutes = () => {
	const { userInfo } = useUser();

	return (
		<Switch>
			<Route
				exact
				path="/dashboard"
				render={props => {
					return <HomeDashboard {...props} userInfo={userInfo} />;
				}}
			/>
			<Route path="/dashboard/eval" component={Eval} />
			<Route path="/dashboard/practice" component={Practice} />
			{/* TODO Add resutls to firestore */}
			{/*<Route path="/dashboard/results" component={Results} />*/}
			<Route
				path="/dashboard/account-settings"
				component={AccountSettings}
			/>
			<Route
				path="/dashboard/profile-picture"
				component={ProfilePicSettings}
			/>
			<Route
				path="/dashboard/personal-settings"
				component={PersonalSettings}
			/>
		</Switch>
	);
};

export default AfterLoginRoutes;
