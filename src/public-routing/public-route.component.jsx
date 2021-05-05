import React from 'react';

import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ component: Component, authed, restricted, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props =>
				authed && restricted ? (
					<Redirect
						to={{
							pathname: '/dashboard',
							state: { from: props.location },
						}}
					/>
				) : (
					<Component {...props} />
				)
			}
		/>
	);
};

export default PublicRoute;
