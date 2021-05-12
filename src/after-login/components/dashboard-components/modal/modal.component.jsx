import React from 'react';
import ReactDOM from 'react-dom';
import './modal.styles.scss';

const ModalOverlay = props => {
	return <div className="overlay" onClick={props.onClick}></div>;
};

const ModalBox = props => {
	return (
		<div className="modal-box">
			<h1 className="modal-box__title">{props.title}</h1>
			<div className="modal-box__buttons">
				<button className="btn-primary" onClick={props.handleLogout}>
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
				<ModalBox
					onClick={props.onClickHandler}
					handleLogout={props.handleLogout}
					title={props.title}
				/>,
				document.getElementById('modal-box')
			)}
		</React.Fragment>
	);
};

export default Modal;
