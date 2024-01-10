import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config/firebase";
import type { UserCredential } from "../../services/auth/types";

export async function signIn(email: string, password: string): Promise<UserCredential | null> {
	if (!email && !password) {
		return null;
	}

	return signInWithEmailAndPassword(auth, email, password);
}
