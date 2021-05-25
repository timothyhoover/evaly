import { useState, useEffect } from 'react';
import { useAuth } from '../context/auth-context';
import { createUserProfileDocument } from '../firebase.utils';

const UserProfile = () => {
	const { currentUser } = useAuth();
	const [userInfo, setUserInfo] = useState();
	const [loading, setLoading] = useState(true);

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
		setUserData();
	}, []);

	return { userInfo };
};

export default UserProfile;
