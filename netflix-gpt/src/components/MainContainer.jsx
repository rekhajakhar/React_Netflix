
/**
 * 
 * @returns main movie video & title
 * take the 1st movie from the now playing movies for this from the store
 */

import VideoBackground from "./VideoBackground";
import VideoDetails from "./VideoDetails";
import React from "react";
import { useSelector } from "react-redux";

const MainContainer = () => {
    const movies = useSelector(store=>store.movies?.nowPlayingMovies);
    if(!movies || movies.length === 0) return null;
    const mainMovie = movies[0];
    if(!mainMovie || mainMovie.length === 0) return null;
    return (
        <div>
            <VideoDetails title={mainMovie.original_title} overview={mainMovie.overview}/>
            <VideoBackground movieId={mainMovie.id}/>
        </div>
    )
};

export default MainContainer;