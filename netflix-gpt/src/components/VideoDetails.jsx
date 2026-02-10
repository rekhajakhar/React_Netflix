import React from "react";

/**
 * 
 * title
 * overview
 * play button    more info button
 */
const VideoDetails = ({title, overview}) => {
    return (
        <div className="pt-[20%] px-12 absolute w-screen aspect-video text-white bg-gradient-to-r from-black">
            <h1 className="font-bold text-6xl">{title}</h1>
            <p className="pt-4 w-1/3 px-2">{overview}</p>
            <div className="pt-4 py-6">
                <button className="m-2 text-2xl bg-white text-black p-4 rounded-md px-8 cursor-pointer hover:opacity-50"> ▶️ Play</button>
                <button className="m-2 text-2xl bg-gray-400 p-4 rounded-md px-8 cursor-pointer hover:opacity-50">More Info</button>
            </div>
            
        </div>
    )
};

export default VideoDetails;