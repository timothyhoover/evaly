import { useState, useEffect } from 'react';
import { useAuth } from '../context/auth-context';
import { createUserProfileDocument } from '../firebase.utils';

const UserProfile = () => {
	const { currentUser } = useAuth();
	const [userInfo, setUserInfo] = useState();

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
	};

	useEffect(() => {
		let isMounted = true;
		if (isMounted) {
			setUserData();
		}

		return () => {
			isMounted = false;
		};
	}, []);

	console.log(currentUser);
	console.log(userInfo);

	return { userInfo };
};

export default UserProfile;
