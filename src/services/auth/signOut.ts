import { signOut as firebaseSignOut } from "firebase/auth";

import { auth } from "../../config/firebase";

export async function signOut(): Promise<void> {
	return firebaseSignOut(auth);
}
