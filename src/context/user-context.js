import React, { useContext, useState, useEffect } from 'react';
import { useAuth } from './auth-context';
import { createUserProfileDocument } from '../firebase.utils';

const UserContext = React.createContext();

export const useUser = () => {
	return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
	const { currentUser } = useAuth();
	const { userRef } = createUserProfileDocument();
	const [userInfo, setUserInfo] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log(userInfo);
	console.log(currentUser);

	const setUserData = async () => {
		if (currentUser) {
			const userRef = await createUserProfileDocument(currentUser);
			userRef.onSnapshot(doc => {
				setUserInfo({
					id: doc.id,
					...doc.data(),
				});
			});
		}

		if (!currentUser) {
			setUserInfo(null);
		}
	};

	const updatePersonalSettings = data => {
		createUserProfileDocument(currentUser, data);
	};

	const updateAccountSettings = data => {
		createUserProfileDocument(currentUser, data);
	};

	useEffect(() => {
		if (currentUser) {
			setUserData();
		}

		if (!currentUser) {
			setUserData(null);
		}
		setLoading(false);
	}, [currentUser]);

	const value = {
		userInfo,
		updateAccountSettings,
		updatePersonalSettings,
		setUserData,
	};

	return (
		<UserContext.Provider value={value}>
			{!loading && children}
		</UserContext.Provider>
	);
};
