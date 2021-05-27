import React, { useState } from 'react';
import { useAuth } from '../../../../context/auth-context';
import { useHistory } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import sprite from '../../../../assets/sprite.svg';
import { Navbar, NavDropdown } from 'react-bootstrap';
import Modal from '../modal/modal.component';
import './top-menu.styles.scss';

const TopMenu = () => {
	const { currentUser, logout } = useAuth();
	const [modal, setModal] = useState();
	const [error, setError] = useState();
	const history = useHistory();

	const handleLogout = async () => {
		setError('');
		try {
			await logout();
			setModal(!modal);
			history.push('/log-in');
		} catch (error) {
			setError(error);
			console.log(error);
		}
	};

	const showModalHandler = () => {
		setModal(!modal);
	};

	return (
		<React.Fragment>
			<div className="wrapper">
				<div className="top-menu">
					<div className="logo top-menu__logo">evaly</div>
					<div className="top-menu__profile-wrapper">
						<Navbar id="top-menu-profile">
							<img
								src={currentUser.photoURL}
								alt="Profile Picture"
								className="profile-img"
							/>
							<Navbar.Collapse>
								<NavDropdown title={currentUser.displayName}>
									<LinkContainer
										to="/dashboard/account-settings"
										activeClassName=""
									>
										<NavDropdown.Item>
											Account Settings
										</NavDropdown.Item>
									</LinkContainer>
									<LinkContainer
										to="/dashboard/personal-settings"
										activeClassName=""
									>
										<NavDropdown.Item>
											Personal Settings
										</NavDropdown.Item>
									</LinkContainer>

									<NavDropdown.Item
										className="dropdown-log-out"
										onClick={showModalHandler}
									>
										<svg className="icon dropdown-icon">
											<use
												href={sprite + '#logout'}
											></use>
										</svg>
										<p className="dropdown-item-log-out">
											Log out
										</p>
									</NavDropdown.Item>
								</NavDropdown>
							</Navbar.Collapse>
						</Navbar>

						{modal && (
							<Modal
								onClickHandler={showModalHandler}
								handleLogout={handleLogout}
								title={'Are you sure you want to log out?'}
							/>
						)}
					</div>

					{/*<a className="top-menu__profile" onClick={handleDropdown}>
						<img
							src={currentUser.photoURL}
							alt="Profile Picture"
							className="top-menu__profile-img"
						/>
						<div className="top-menu__profile-name-wrapper">
							<p className="top-menu__profile-name">
								{currentUser.displayName}
							</p>
						</div>

						<svg className="icon top-menu__arrow-icon">
							<use href={sprite + '#arrow-down'}></use>
						</svg>
	</a>*/}
				</div>

				{/*isVisible && <Dropdown handleDropdown={handleDropdown} />*/}
			</div>
		</React.Fragment>
	);
};

export default TopMenu;
