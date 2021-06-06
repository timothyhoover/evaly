import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { v4 as uuidv4 } from 'uuid';

const app = firebase.initializeApp({
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	const { displayName, email, photoURL } = userAuth;
	const createdAt = new Date();

	if (!snapShot.exists) {
		try {
			await userRef.set({
				displayName,
				photoURL,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error catching data', error.message);
		}
	}

	if (snapShot.exists) {
		try {
			await userRef.update({
				displayName,
				email,
				...additionalData,
			});
		} catch (error) {
			console.log('error catching data', error.message);
		}
	}

	return userRef;
};

export const userEvalResults = async (userAuth, results) => {
	if (!userAuth) return;

	const evalRef = firestore.doc(`evals/${userAuth.uid}`);
	const snapshot = await evalRef.get();
	const options = { month: 'long' };
	const date = new Date();
	const month = new Intl.DateTimeFormat('en-US', options).format(date);
	const day = date.getDate();
	const year = date.getFullYear();
	const evalDate = month + ' ' + day + ', ' + year;

	if (!snapshot.exists) {
		try {
			await evalRef.set({
				evals: [
					{
						results: {
							level: results.currentLevel,
							date: evalDate,
							id: uuidv4(),
						},
					},
				],
			});
		} catch (error) {
			console.log('error catching data', error.message);
		}
	}

	if (snapshot.exists) {
		try {
			await evalRef.update({
				evals: firebase.firestore.FieldValue.arrayUnion({
					results: {
						level: results.currentLevel,
						date: evalDate,
						id: uuidv4(),
					},
				}),
			});
		} catch (error) {
			console.log('error catching data', error.message);
		}
	}
	return evalRef;
};

export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const auth = app.auth();

export default app;
