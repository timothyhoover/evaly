import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopMenu from '../components/top-menu/top-menu.component';
import SideMenu from '../components/side-menu/side-menu.component';
import HomeDashboard from '../components/home/home-dashboard.component';
import Eval from '../components/eval/eval.component';
import Practice from '../components/practice/practice.component';
import Results from '../components/results/results.component';
import AccountSettings from '../components/account-settings/account-settings.component';
import ProfilePicSettings from '../components/profile-pic-settings/profile-pic.component';
import PersonalSettings from '../components/personal-settings/personal-settings.component';
import './dashboard.styles.scss';

const Dashboard = () => (
	<div className="container">
		<div className="dashboard">
			<SideMenu />
			<div className="dashboard__main">
				<TopMenu />
				<Switch>
					<Route path="/dashboard/home" component={HomeDashboard} />
					<Route path="/dashboard/eval" component={Eval} />
					<Route path="/dashboard/practice" component={Practice} />
					<Route path="/dashboard/results" component={Results} />
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
			</div>
		</div>
	</div>
);

export default Dashboard;
