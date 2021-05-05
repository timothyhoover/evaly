import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import './modal.styles.scss';

const ModalOverlay = props => {
	return <div className="overlay" onClick={props.onClick}></div>;
};

const ModalBox = props => {
	const { logout } = useAuth();
	const [error, setError] = useState();
	const history = useHistory();

	const handleLogout = async () => {
		setError('');
		try {
			await logout();
			history.push('/log-in');
		} catch (error) {
			alert(error);
		}
	};

	return (
		<div className="modal-box">
			<h1 className="modal-box__title">
				Are you sure you want to log out?
			</h1>
			<div className="modal-box__buttons">
				<button
					className="btn-primary"
					onClick={() => {
						handleLogout();
						props.onClick();
					}}
				>
					Yes I’m Sure
				</button>
				<button className="btn-primary" onClick={props.onClick}>
					Cancel
				</button>
			</div>
		</div>
	);
};

const Modal = props => {
	return (
		<React.Fragment>
			{ReactDOM.createPortal(
				<ModalOverlay onClick={props.onClickHandler} />,
				document.getElementById('modal-overlay')
			)}

			{ReactDOM.createPortal(
				<ModalBox onClick={props.onClickHandler} />,
				document.getElementById('modal-box')
			)}
		</React.Fragment>
	);
};

export default Modal;
