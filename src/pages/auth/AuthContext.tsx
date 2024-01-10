import React, { createContext, useContext, useEffect, useState } from "react";
import { signIn as signInUser, signOut as signOutUser } from "services/auth/index";
import { User } from "services/auth/types";

import { userStateListener } from "../../config/firebase";

export interface ContextState {
	currentUser: User | null;
	signIn: (email: string, password: string) => Promise<User | null>;
	signOut: () => Promise<void>;
}

export const AuthContext = createContext({} as ContextState);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
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
			if (user) {
				setCurrentUser(user);
			}
		});

		return unsubscribe;
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<AuthContext.Provider value={{ currentUser, signIn, signOut }}>{children}</AuthContext.Provider>
	);
};

export const useAuthContext = () => useContext(AuthContext);
