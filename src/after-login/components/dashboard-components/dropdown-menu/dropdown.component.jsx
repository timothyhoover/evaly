import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import sprite from '../../../../assets/sprite.svg';
import Modal from '../modal/modal.component';
import './dropdown.styles.scss';

const Dropdown = props => {
	const [modal, setModal] = useState();

	const showModalHandler = () => {
		setModal(!modal);
	};

	return (
		<div className="dropdown" id="dropdownId" ref={props.ref}>
			<nav role="account navigation" className="dropdown__container">
				<Link
					to="/dashboard/account-settings"
					className="dropdown__item"
				>
					Account Settings
				</Link>

				<Link
					to="/dashboard/profile-picture"
					className="dropdown__item"
				>
					Profile Picture
				</Link>

				<Link
					to="/dashboard/personal-settings"
					className="dropdown__item"
				>
					Personal Settings
				</Link>
				<a className="dropdown__log-out" onClick={showModalHandler}>
					<svg className="icon dropdown__icon">
						<use href={sprite + '#logout'}></use>
					</svg>
					<p className="dropdown__item--log-out">Log out</p>
				</a>
			</nav>
			{modal && <Modal onClickHandler={showModalHandler} />}
		</div>
	);
};

export default Dropdown;
