import React, { useContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
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
	const [userInfo, setUserInfo] = useState();

	const signup = async (displayName, email, password) => {
		return auth
			.createUserWithEmailAndPassword(email, password)
			.then(userAuth => {
				userAuth.user.updateProfile({
					displayName: displayName,
				});
			})
			.then(() => createUserProfileDocument(currentUser));
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

	console.log(currentUser);
	console.log(userInfo);

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged(async user => {
			if (user) {
				const userRef = await createUserProfileDocument(user);
				userRef.onSnapshot(doc => {
					setUserInfo({
						id: doc.id,
						...doc.data(),
					});
				});
			}
			setUserInfo(user);
			setCurrentUser(user);
			setLoading(false);
		});
		return unsubscribe;
	}, []);

	const value = {
		currentUser,
		userInfo,
		login,
		signup,
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
