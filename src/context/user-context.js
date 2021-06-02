import React, { useContext, useState, useEffect, useCallback } from 'react';
import { useAuth } from './auth-context';
import { createUserProfileDocument } from '../firebase.utils';

const UserContext = React.createContext();

export const useUser = () => {
	return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
	const { currentUser } = useAuth();
	const [userInfo, setUserInfo] = useState(null);
	const [loading, setLoading] = useState(true);

	console.log(userInfo);
	console.log(currentUser);

	const setUserData = useCallback(async () => {
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
	}, [currentUser]);

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
	}, [currentUser, setUserData]);

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
