import { auth } from "config/firebase";
import { signOut as firebaseSignOut } from "firebase/auth";

export async function signOut(): Promise<void> {
	return firebaseSignOut(auth);
}
