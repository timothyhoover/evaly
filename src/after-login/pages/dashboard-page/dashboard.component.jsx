import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import TopMenu from '../../dashboard-components/top-menu/top-menu.component';
import SideMenu from '../../dashboard-components/side-menu/side-menu.component';
import HomeDashboard from '../../dashboard-components/home/home-dashboard.component';
import Eval from '../../dashboard-components/eval/eval.component';
import Practice from '../../dashboard-components/practice/practice.component';
import Results from '../../dashboard-components/results/results.component';
import AccountSettings from '../../dashboard-components/account-settings/account-settings.component';
import ProfilePicSettings from '../../dashboard-components/profile-pic-settings/profile-pic.component';
import PersonalSettings from '../../dashboard-components/personal-settings/personal-settings.component';
import LogOutModal from '../../dashboard-components/log-out-modal/log-out-modal.component';
import Dropdown from '../../dashboard-components/dropdown-menu/dropdown.component';
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
