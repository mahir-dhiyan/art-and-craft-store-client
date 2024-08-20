import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, updateProfile ,signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useState, useEffect } from "react";


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export const AuthContext = createContext(null);
const Authproviders = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // -------------------Create User-------------------------


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, { displayName: name, photoURL: photo })
            .then(() => {
                setUser((prevUser) => ({ ...prevUser, displayName: name, photoURL: photo }));
            });
    };
// ------------------------Login user---------------------------


const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
};

// ---------------------------Logout-----------------------------
const logOut = () => {
    setLoading(true);
    return signOut(auth);
};
// ------------------------------------------
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);
    const authInfo = {
        user,
        createUser,
        loading,
        updateUserProfile,
        signIn,
        logOut,
        setUser,
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>

    );
};

export default Authproviders;