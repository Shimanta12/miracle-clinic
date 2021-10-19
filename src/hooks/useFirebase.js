import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
    // states
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // firebase auth
    const auth = getAuth();

    // Google auth provider
    const googleProvider = new GoogleAuthProvider();

    // user sign up with email and pass
    const createUserUsingEmailAndPass = (name, email, password) => {
        setIsLoading(true);
        if (user.email) {
            setError('Already logged in to an account. Please Log out first');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('Password must contain two uppercase charecter');
            return;
        }
        setError('');
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user)
                setUserName(name)
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }


    // user sign in with email and pass
    const signInUsingEmailAndPass = (email, password) => {
        setIsLoading(true)
        if (user.email) {
            setError('Already logged in to an account.Please log out first')
            return;
        }
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setUser(result.user);
                setError('')
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }

    // setting displayName in user
    const setUserName = (name) => {
        updateProfile(auth.currentUser, { displayName: name })
            // eslint-disable-next-line no-undef
            .then(() => { user.reload() })
            .catch((error) => {
                setError(error.message)
                setError('')
            });
    }

    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true)
        if (user.email) {
            setError('Already logged in to an account.Please log out first')
            return;
        }
        setError('');
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false))
    }

    // user log out
    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => {
                setUser({})
            })
            .catch(error => { })
            .finally(() => setIsLoading(false))
    }
    // om auth state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        user,
        error,
        isLoading,
        createUserUsingEmailAndPass,
        signInUsingEmailAndPass,
        signInUsingGoogle,
        logOut
    };
};

export default useFirebase;