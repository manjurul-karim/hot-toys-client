import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import App from '../App';
import app from '../firebase/firebase.config';

export const authContext = createContext(null)

const auth = getAuth(app)
const user ={displatName:'King Khan'}
const AuthProvider = ({children}) => {

    const authInfo={
            user
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider >
    );
};

export default AuthProvider;