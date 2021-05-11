import React, { useContext, useState, useEffect } from 'react';

import {
	auth,
	signInWithGoogle,
	createUserProfileDocument,
} from '../firebase.utils';

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = (displayName, email, password) => {
		return auth.createUserWithEmailAndPassword(email, password);
		// .then(userAuth => {
		// 	userAuth.user.updateProfile({
		// 		displayName: displayName,
		// 	});
		// })
		// .catch(error => {
		// 	console.log(error);
		// });
	};

	const setDisplayName = displayName => {
		return auth.currentUser.updateProfile({
			displayName: displayName,
		});
	};

	const login = (email, password) => {
		return auth.signInWithEmailAndPassword(email, password);
	};

	const logout = () => {
		setCurrentUser(null);
		return auth.signOut();
	};

	const resetPassword = email => {
		return auth.sendPasswordResetEmail(email);
	};

	const updateEmail = email => {
		return currentUser.updateEmail(email);
	};

	const updatePassword = password => {
		return currentUser.updatePassword(password);
	};

	const updateName = displayName => {
		return currentUser.updateProfile({
			displayName: displayName,
		});
	};

	const googleSignIn = () => {
		const google = signInWithGoogle();
		setCurrentUser(google);
		return google;
	};

	const updateAccountSettings = () => {
		createUserProfileDocument(currentUser);
	};

	const updatePersonalSettings = data => {
		createUserProfileDocument(currentUser, data);
	};

	createUserProfileDocument(currentUser);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(user => {
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		login,
		signup,
		setDisplayName,
		logout,
		resetPassword,
		updateEmail,
		updatePassword,
		updateName,
		googleSignIn,
		updatePersonalSettings,
		updateAccountSettings,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
