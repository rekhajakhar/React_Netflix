import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSeachMovieRecommendations from "./GptSearchMovieRecommendations";
import { BACKGROUND_MOVIE_IMAGE } from "../utils/constants";

const GptSearch = () => {
    return (
        <div>
            <div className="fixed -z-10">
                <img className="h-screen w-screen object-cover" alt="background img" src={BACKGROUND_MOVIE_IMAGE}/>
            </div>
            <div className="">
                <GptSearchBar/>
                <GptSeachMovieRecommendations/>
            </div>
        </div>
    )
};

export default GptSearch;