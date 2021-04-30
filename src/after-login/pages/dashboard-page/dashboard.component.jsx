import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopMenu from '../../components/dashboard-components/top-menu/top-menu.component';
import SideMenu from '../../components/dashboard-components/side-menu/side-menu.component';
import HomeDashboard from '../../components/dashboard-components/home/home-dashboard.component';
import Eval from '../../components/dashboard-components/eval/eval.component';
import Practice from '../../components/dashboard-components/practice/practice.component';
import Results from '../../components/dashboard-components/results/results.component';
import AccountSettings from '../../components/dashboard-components/account-settings/account-settings.component';
import ProfilePicSettings from '../../components/dashboard-components/profile-pic-settings/profile-pic.component';
import PersonalSettings from '../../components/dashboard-components/personal-settings/personal-settings.component';
import './dashboard.styles.scss';

const Dashboard = () => {
	return (
		<div className="container">
			<div className="dashboard">
				<SideMenu />
				<div className="dashboard__main">
					<TopMenu />

					<Switch>
						<Route
							path="/dashboard/home"
							component={HomeDashboard}
						/>
						<Route path="/dashboard/eval" component={Eval} />
						<Route
							path="/dashboard/practice"
							component={Practice}
						/>
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
};
export default Dashboard;
