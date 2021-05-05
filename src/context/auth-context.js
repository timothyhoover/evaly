import React, { useContext, useState, useEffect } from 'react';

import { auth } from '../firebase.utils';

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = (displayName, email, password) => {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then(user => {
				auth.currentUser.updateProfile({
					displayName: displayName,
				});
			});
	};

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	const logout = () => {
		return auth.signOut();
	};

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			if (user) {
				setCurrentUser(user);
			}
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		signup,
		logout,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
