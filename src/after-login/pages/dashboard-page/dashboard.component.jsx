import React, { useState } from 'react';

import TopMenu from '../../components/dashboard-components/top-menu/top-menu.component';
import SideMenu from '../../components/dashboard-components/side-menu/side-menu.component';
import AfterLoginRoutes from '../../routing/after-login-routes.component';

import './dashboard.styles.scss';

const Dashboard = () => {
	return (
		<div className="container">
			<div className="dashboard">
				<SideMenu />
				<div className="dashboard__main">
					<TopMenu />
					<AfterLoginRoutes />
				</div>
			</div>
		</div>
	);
};
export default Dashboard;
