import {
	Auth as FirebaseAuth,
	User as FirebaseUser,
	UserCredential as FirebaseUserCredential,
} from "firebase/auth";

export type UserCredential = FirebaseUserCredential;
export type User = FirebaseUser;
export type Auth = FirebaseAuth;
