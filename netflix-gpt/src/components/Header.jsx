import React, { useEffect } from "react";
import { useSelector, useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

//connect the store & show the image at right before the sign out button
// read from store if user is there then only show the sign out button & the image
const Header = () => {
    const user = useSelector((state)=>state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = () => {
        signOut(auth).then(() => {
        // Sign-out successful.
        
        // navigate to home page
        navigate("/");

        }).catch((error) => {
        // An error happened.
        navigate("/error");
        });
    };

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-44" src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="logo"/>
            {user &&<div className="m-2 flex p-2">
                <img className="w-12 h-12" src={user?.photoURL} alt="usericon"/>
                <button className="font-bold text-white" onClick={handleSignOut}>(Sign Out)</button>
            </div>}
        </div>
    )
};

export default Header;