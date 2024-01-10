import { initializeApp } from "firebase/app";
import {
	createUserWithEmailAndPassword,
	getAuth,
	NextOrObserver,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
	User,
	UserCredential,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
	measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export const signInUser = async ({
	email,
	password,
}: {
	email: string;
	password: string;
}): Promise<UserCredential | null> => {
	if (!email && !password) {
		return null;
	}

	return await signInWithEmailAndPassword(auth, email, password);
};

export const createUser = async (
	email: string,
	password: string,
): Promise<UserCredential | null> => {
	if (!email && !password) {
		return null;
	}

	return await createUserWithEmailAndPassword(auth, email, password);
};

export const userStateListener = (callback: NextOrObserver<User>): (() => void) => {
	return onAuthStateChanged(auth, callback);
};

export const signOutUser = async (): Promise<void> => await signOut(auth);
