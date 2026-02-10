import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGE } from "../utils/constants";
import { toggleGptSearchState } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

//connect the store & show the image at right before the sign out button
// read from store if user is there then only show the sign out button & the image

/**
 * add a button in header before sign out & on click of it toggle the store for gpt state to show
 * @returns 
 */

const Header = () => {
    const user = useSelector((store)=>store.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const gptSearchStatus = useSelector(store=>store.gpt?.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {}).catch((error) => {
        // An error happened.
        navigate("/error");
        });
    };

    useEffect(()=>{
        // check the firebase api for auth state change
        const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, displayName, email, photoURL} = user;
            // dispatch an action to add the user to the redux store addUser
            dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
            navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
        });

        // unsubscribe to the onAuthStateChanged listener when the component unmounts unsubscribe is a function returned by onAuthStateChanged
        return () => unsubscribe();
    }, []);

    const toggleGptStoreState =() => {
        dispatch(toggleGptSearchState());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ">
            <img className="w-44 mx-auto md:mx-0" src={LOGO}
            alt="logo"/>
            {user && (
                <div className="flex">
                    {gptSearchStatus && <select className="bg-gray-900 text-white p-2 m-2" onChange={handleLanguageChange}>
                        {SUPPORTED_LANGUAGE.map(lan => <option key={lan.identifier} value={lan.identifier}> {lan.name} </option>)}
                    </select>}
                    <button className="text-white text-xl bg-red-700 m-4 p-2 px-4 rounded-lg cursor-pointer" onClick={toggleGptStoreState}>{gptSearchStatus ? "Home Page" : "Gpt Search"}</button>
                    <div className="m-2 flex p-2">
                        <img className="hidden md:block w-12 h-12" src={user?.photoURL} alt="usericon"/>
                        <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
                    </div>
                </div>)}
        </div>
    )
};

export default Header;