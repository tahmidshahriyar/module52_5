import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firabse.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true)

    // console.log(user, loading)
   
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const LogOut = ()=>{
        return signOut(auth);
    };
    const signIn = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    };
    const updateUser = (updatedData)=>{
        return updateProfile(auth.currentUser , updatedData);
    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);

        });
        return ()=>{
            unsubcribe()
        }
    },[])

    const authData = {
        user,
        setUser,
        createUser,
        LogOut,
        signIn,
        loading,
        setLoading,
        updateUser
    }


  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider