import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect } from 'react';
import { useState } from 'react';
import { auth } from '../../firebase config';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    
    const [loading, setLoading] = useState(true)
    const [dark, setDark] = useState(false)
    
    const provider = new GoogleAuthProvider()
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        setLoading(true)
        signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, async currentUser => {
            if (currentUser && currentUser?.photoURL) {
              setUser(currentUser)
            } else {

                setUser(null)
            }
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])

    const apiInfo = {
        user,
        setUser,
        loading,
        googleLogin,
        createUser,
        profileUpdate,
        login,
        logout,
        dark,
        setDark
    }

    return (
        <AuthContext.Provider value={apiInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;