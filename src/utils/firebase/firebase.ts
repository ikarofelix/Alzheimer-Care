import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  UserInfo,
  updateProfile,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

initializeApp(firebaseConfig);

export const provider = new GoogleAuthProvider();

export const auth = getAuth();

export const signInWithGooglePopup = async (): Promise<UserInfo> => {
  try {
    const { user } = await signInWithPopup(auth, provider);
    return user;
  } catch (err) {
    throw new Error((err as Error).message);
  }
};

export const signUpWithEmailAndPassword = async (
  email: string,
  password: string,
  displayName: string
): Promise<UserInfo> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    await updateProfile(user, { displayName });
    return user;
  } catch (err) {
    throw err;
  }
};

export const signInEmailAndPassword = async (
  email: string,
  password: string
): Promise<UserInfo> => {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    return user;
  } catch (err) {
    throw err;
  }
};
