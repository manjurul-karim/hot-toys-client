/* eslint-disable react/prop-types */
import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const authContext = createContext(null);

const auth = getAuth(app);

const googleAuthprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (email, password, displayName, photoURL) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        return user.updateProfile({
          displayName: displayName,
          photoURL: photoURL,
        });
      })
      .finally(() => setLoading(false));
  };

  const signIn = (email, password, displayName, photoURL) => {
    setLoading(true);
    return signInWithEmailAndPassword(
      auth,
      email,
      password,
      displayName,
      photoURL,
      loading
    );
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthprovider);
  };

  const logedOut = () => {
    signOut(auth);
  };

  //  ! observe auth state change
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      //   console.log('auth state change' , currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    signInWithGoogle,
    logedOut,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
