import React , { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = ()=>{
    const dispatch = useDispatch();

    const appLayout = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path: "/Browse",
            element: <Browse/>
        }
    ]);

    useEffect(()=>{
        // check the firebase api for auth state change
        onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/auth.user
            const {uid, displayName, email, photoURL} = user;
            // dispatch an action to add the user to the redux store addUser
            dispatch(addUser({uid: uid, displayName: displayName, email: email, photoURL: photoURL}));
        } else {
            // User is signed out
            dispatch(removeUser())
        }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appLayout}/>
        </div>
    )
};

export default Body;