import React from "react";
import Header from "./Header";
import {useState} from "react";

// build sign in off & sign up form

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const handleSignUpClick = () => {
        setIsSignInForm(!isSignInForm);
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
                <form className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white opacity-70 rounded-lg">
                    <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && <input className="w-full my-4 p-4 bg-gray-700" type="text" placeholder="Name"/>}
                    <input className="w-full my-4 p-4 bg-gray-700" type="text" placeholder="Email"/>
                    <input className="w-full my-4 p-4 bg-gray-700" type="text" placeholder="Password"/>
                    {isSignInForm && <button className="text-red-500 font-bold text-lg py-2">Sign In</button>}
                    <p className="py-4 cursor-pointer" onClick={handleSignUpClick}>{isSignInForm ? "New to Netflix? Sign Up" :"Already have an account? Sign In"}</p>
                </form>
        </div>
    )
};

export default Login;
