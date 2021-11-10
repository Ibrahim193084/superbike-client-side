
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut,  createUserWithEmailAndPassword,  signInWithEmailAndPassword,  sendEmailVerification, updateProfile} from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Pages/Authentication/Firebase/firebase.init";
initializeAuthentication()
const useFirebase = () =>{
    const [user , setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [admin, setAdmin] = useState(false)
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    // google sign in handler
    // -------------------------
    const signInWithGoogle = () =>{
      setIsLoading(true)
       return signInWithPopup(auth, googleProvider)
    }
    // sign in and sign up with email and password
    // ----------------------------------
    const handleEmail = (e)=>{
      setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
      setPassword(e.target.value)
    }
    const handleName = (e)=>{
      setName(e.target.value)
    }
    // set user name
    // ------------------
    const setUserName = () =>{
      updateProfile(auth.currentUser, {
        displayName: name
      }).then(() => {
        // Profile updated!
        // ...
      })
    }

    // handle sign up
    // ---------------------
    const handleSignUp = (e) =>{
      e.preventDefault()
      password.length<6 && setError('password must be at least 6 characters long')
      !/(?=.*[!@#$%^&*])/.test(password) && setError('password must be at least a spicial character or symbol')
      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const {displayName, email, photoURL} = userCredential.user;
        // console.log(user)
        const userInfo = {
            name: displayName,
            email: email,
            image: photoURL
        }
        setUser(userInfo)
        saveUser(email, name, 'POST')
        sendVerification()
        setUserName()
      }).catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        // setError(errorMessage)
      });
      // console.log(user)
    }
    // handle log in
    // ---------------------
    const handleLogIn = (e) =>{
      e.preventDefault()
      password.length<6 && setError('password must be at least 6 characters long')
      !/(?=.*[!@#$%^&*])/.test(password) && setError('password must be at least a spicial character or symbol')
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const {displayName, email, photoURL} = userCredential.user;
        // console.log(user)
        const userInfo = {
            name: displayName,
            email: email,
            image: photoURL
        }
        setUser(userInfo)
        sendVerification()
      }).catch((error) => {
        const errorMessage = error.message;
        // The email of the user's account used.
        // setError(errorMessage)
      });
      console.log(user)
    }
    // send verification email in user eamil
    // -----------------------------------------
    const sendVerification = () =>{
     sendEmailVerification(auth.currentUser)
      .then(() => {
        // Email verification sent!
        // ...
      });
    }
    // set user on auth state change
    // --------------------------------
    useEffect(()=>{
    const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser({})
        }
        setIsLoading(false)
      });
      return unsubscribed;
    },[])
      //set admin
    useEffect(() => {
        fetch(`https://arcane-hamlet-67437.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    // handle log out
    const logOut = () =>{
      setIsLoading(true)
      signOut(auth).then(() => {
        setUser({})
      })
      .finally(()=>setIsLoading(false))
      // .catch((error) => {
      //   // setError(error.message)
      // });
    }

    // save user

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        fetch('https://arcane-hamlet-67437.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }
    
    return{user,setUser,setError, error, signInWithGoogle, logOut, handleEmail, handlePassword,handleSignUp,handleLogIn,sendVerification, setIsLoading, isLoading, handleName, saveUser, admin}
}

export default useFirebase;