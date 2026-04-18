"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  GoogleAuthProvider
} from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";


const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  function signinginWithEmailAndPassword(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  async function signUpWithEmailAndPassword(email, password) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential;
  }
  const gitHubSignIn = async () => {
    const provider = new GithubAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);

    return userCredential;
  };
  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);

    return userCredential;
  };
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        gitHubSignIn,
        firebaseSignOut,
        signUpWithEmailAndPassword,
        signinginWithEmailAndPassword,
        googleSignIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useUserAuth = () => {
  return useContext(AuthContext);
};