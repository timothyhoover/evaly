import React, { useContext, useState, useEffect } from 'react';

import {
	auth,
	signInWithGoogle,
	createUserProfileDocument,
	firestore,
} from '../firebase.utils';

const AuthContext = React.createContext();

export const useAuth = () => {
	return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState();
	const [loading, setLoading] = useState(true);

	const signup = (email, password) => {
		return auth.createUserWithEmailAndPassword(email, password);
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

	const deleteProfile = () => {
		currentUser.delete();
		firestore.doc(`users/${currentUser.uid}`).delete();
	};

	// TODO see if updateName and setName do the same thing
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

	const updatePersonalSettings = data => {
		createUserProfileDocument(currentUser, data);
	};

	createUserProfileDocument(currentUser);

	console.log(currentUser);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async user => {
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
		deleteProfile,
	};

	return (
		<AuthContext.Provider value={value}>
			{!loading && children}
		</AuthContext.Provider>
	);
};
