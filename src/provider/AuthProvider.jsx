import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firabse.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState();

    console.log(user)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const LogOut = ()=>{
        return signOut(auth);
    };
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)

    }


    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)

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
        signIn
    }


  return <AuthContext value={authData}>{children}</AuthContext>
}

export default AuthProvider