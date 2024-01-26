import React, { createContext, useContext, useEffect, useState } from "react";

import { userStateListener } from "../../config/firebase";
import { signIn as signInUser, signOut as signOutUser } from "../../services/auth/index";
import { User } from "../../services/auth/types";

export interface ContextState {
	currentUser: User | null;
	loading: boolean;
	signIn: (email: string, password: string) => Promise<User | null>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as ContextState);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [loading, setLoading] = useState(true);
	const [currentUser, setCurrentUser] = useState<User | null>(null);

	const signOut = async () => {
		setCurrentUser(null);

		return signOutUser();
		/////// navigate('/')
	};

	const signIn = async (email: string, password: string) => {
		const userCredential = await signInUser(email, password);
		if (userCredential?.user) {
			setCurrentUser(userCredential.user);

			return userCredential.user;
		}

		return null;
	};

	useEffect(() => {
		const unsubscribe = userStateListener((user) => {
			setLoading(false);
			if (user) {
				setCurrentUser(user);
			}
		});

		return unsubscribe;
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<AuthContext.Provider value={{ currentUser, loading, signIn, signOut }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
