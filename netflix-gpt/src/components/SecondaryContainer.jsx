import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

/** 
 * movies list component for multiple movies categories ex. now playing movies, horrow movies etc.
 * @returns 
 */
const SecondaryContainer = () => {
    const movies = useSelector(store=>store.movies);
    if(!movies || movies.length === 0) return null;
    return(
        <div className="bg-black">
            <div className=" mt-0 md:-mt-90 relative">
                <MovieList title={"Now Playing"} data={movies?.nowPlayingMovies}/>
                <MovieList title={"Popular Movies"} data={movies?.popularMovies}/>
                <MovieList title={"Top Rated Movies"} data={movies?.topRatedMovies}/>
                <MovieList title={"Upcoming Movies"} data={movies?.upcomingMovies}/>
            </div>
        </div>
    )
};

export default SecondaryContainer;