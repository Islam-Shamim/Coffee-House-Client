import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import PropTypes from 'prop-types';
import { app } from "../firebase/firebase.config";

const auth = getAuth(app);

export  const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const createSignIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const userInfo = {
        user,
        loading,
        createUser,
        createSignIn
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.object
  };
export default AuthProvider;