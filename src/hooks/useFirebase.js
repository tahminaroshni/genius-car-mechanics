import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const signInUsingGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user?.email) {
        setUser(user);
      }
      else {
        setUser({});
      }
      setIsLoading(false);
    })

    return (() => unsubscribe());
  }, [])

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({});
        setIsLoading(false);
      })
  }

  return {
    user,
    isLoading,
    setUser,
    signInUsingGoogle,
    logOut
  };
}

export default useFirebase;