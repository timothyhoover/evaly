import React from 'react';
import { Switch, Route } from 'react-router-dom';
import TopMenu from '../components/top-menu/top-menu.component';
import SideMenu from '../components/side-menu/side-menu.component';
import HomeDashboard from '../components/home/home-dashboard.component';
import Eval from '../components/eval/eval.component';
import Practice from '../components/practice/practice.component';
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
				</Switch>
			</div>
		</div>
	</div>
);

export default Dashboard;
