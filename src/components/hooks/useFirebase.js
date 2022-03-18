import {getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initilizationAuthentication from "../Firebase/firebase.init";

// firebase init 
initilizationAuthentication()


// google provider 
const googleProvider = new GoogleAuthProvider();

// firebase auth provider 
const auth = getAuth();

const useFirebase = () => {
    // all state declear here 
    const [user, setUser] = useState([]);


    // google signin 
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
        .then(result => {
            console.log(result.user)
            setUser(result.user)
        })
    }
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
        })
    }, [])

    // log out 
    const logOut = () => {
        signOut(auth)
        .then(() => {
            setUser({})
        })
    }
    return {
        googleSignIn,
        logOut,
        user,
        setUser
    }
}



export default useFirebase;