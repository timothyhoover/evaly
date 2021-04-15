import React, { useEffect } from 'react';
import './log-out-modal.styles.scss';

const LogOut = props => {
	useEffect(() => {
		console.log('useEffect');
		if (!props.isOpen) {
			document.getElementById('logout-id').style.display = 'none';
		} else {
			document.getElementById('logout-id').style.display = 'flex';
		}
	});

	return (
		<div className="log-out" id="logout-id">
			<div className="log-out__box">
				<h1 className="log-out__title">
					Are you sure you want to log out?
				</h1>
				<div className="log-out__buttons">
					<button className="btn-primary">Yes I’m Sure</button>
					<button className="btn-primary">Cancel</button>
				</div>
			</div>
		</div>
	);
};

export default LogOut;
