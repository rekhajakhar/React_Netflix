import React from "react";
import Header from "./Header";
import {useState, useRef} from "react";
import { emailPasswordValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { addUser } from "../utils/userSlice";

// build sign in off & sign up form

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleSignUpClick = () => {
        setIsSignInForm(!isSignInForm);
    }

    //validate the email & password entered by user
    const email = useRef(null);
    const password = useRef(null);
    const name = useRef(null);
    const handleButtonClick = () =>{
        const message = emailPasswordValidation(email.current.value, password.current.value);
        setErrorMessage(message);

        //sign in/sign up using firebase APIs
        if(message) return;

        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user);
                
                 //update the profile for the display name and photoURL
                updateProfile(user, {
                displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/44399263?s=400&v=4"
                }).then(() => {
                // Profile updated!
                // dispatch an action update the store with name & photourl
                const {uid, displayName, email, photoURL} = auth.currentUser;
                dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
                navigate("/browse");
                }).catch((error) => {
                // An error occurred
                setErrorMessage(error.message);
                });   
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                //console.log(errorCode + " - " + errorMessage);
                setErrorMessage(errorCode + " - " + errorMessage);
            });
        } else {
            //sign in the user
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                navigate("/browse");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                
                setErrorMessage(errorCode + " - " + errorMessage);
            });
        }
       

    }

    return (
        <div>
            <div>
            <Header/>
            </div>
            <div className="absolute">
            <img src="https://occ-0-1492-3663.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQsqirDLtHJLG_-eW3VZlp8rn8-nCW5bu_ZLqcz6egl8yM1V6noIeSx4uupcAjmNNTNMsLpYRX7NaCVvemvVXzQZ9HSWjFhaz7jv.webp?r=910"
            alt="movie"/>
            </div>
                <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-70 rounded-lg">
                    <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && <input ref={name} className="w-full my-4 p-4 bg-gray-700" type="text" placeholder="Name"/>}
                    <input ref={email} className="w-full my-4 p-4 bg-gray-700" type="text" placeholder="Email"/>
                    <input ref={password} className="w-full my-4 p-4 bg-gray-700" type="password" placeholder="Password"/>
                    <p className="text-red-500 text-bold py-2 text-lg">{errorMessage}</p>
                    <button className="text-red-500 font-bold text-lg py-2" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    <p className="py-4 cursor-pointer" onClick={handleSignUpClick}>{isSignInForm ? "New to Netflix? Sign Up" :"Already have an account? Sign In"}</p>
                </form>
        </div>
    )
};

export default Login;
