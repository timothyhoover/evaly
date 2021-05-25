import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../../context/auth-context';
import sprite from '../../../../assets/sprite.svg';
import Modal from '../modal/modal.component';
import { Dropdown } from 'react-bootstrap';
import './dropdown.styles.scss';

const Dropdown = (props, ref) => {
	const [modal, setModal] = useState();
	const { logout } = useAuth();
	const [error, setError] = useState();
	const history = useHistory();

	const handleLogout = async () => {
		setError('');
		try {
			await logout();
			setModal(!modal);
			history.push('/log-in');
		} catch (error) {
			alert(error);
		}
	};

	const showModalHandler = () => {
		setModal(!modal);
	};

	return (
		<div className="dropdown" id="dropdownId" ref={ref}>
			<nav role="account navigation" className="dropdown__container">
				<Link
					to="/dashboard/account-settings"
					className="dropdown__item"
					onClick={props.handleDropdown}
				>
					Account Settings
				</Link>

				<Link
					to="/dashboard/profile-picture"
					className="dropdown__item"
					onClick={props.handleDropdown}
				>
					Profile Picture
				</Link>

				<Link
					to="/dashboard/personal-settings"
					className="dropdown__item"
					onClick={props.handleDropdown}
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
			{modal && (
				<Modal
					onClickHandler={showModalHandler}
					handleLogout={handleLogout}
					title={'Are you sure you want to log out?'}
				/>
			)}
		</div>
	);
};

const DropdownRef = React.forwardRef(Dropdown);
export default DropdownRef;
