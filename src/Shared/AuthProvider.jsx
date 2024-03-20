
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState({})
    const [loader, setLoader] = useState(true)

    //signInWithGoogle
    const provider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoader(true)
        return signInWithPopup(auth, provider)
    }

    // create user 
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }



    // log in 
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // log out 
    const logOut = () => {
        setLoader(true)
        return signOut(auth)

    }

    // update 
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    // save user 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            if (currentUser) {
                // get token and store client
                const userInfo = {email  : currentUser.email}
                axiosPublic.post('/jwt' , userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token)
                    }
                })
            }
            else {
                // remove token (if token stored in the client side(local storage))
                localStorage.removeItem('access-token');
            }
            setLoader(false)
        });

        return () => {
            unSubscribe()
        }


    }, [])
    // console.log(user);

    const authInfo = {
        signInWithGoogle, createUser, login, logOut, user, loader, handleUpdateProfile
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};




import PropTypes from 'prop-types';
import useAxiosPublic from "../hooks/useAxiosPublic";



AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;