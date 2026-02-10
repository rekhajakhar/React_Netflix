
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import React from "react";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


/**
 * show the main & secondary container when gptsearch state is false otherwise show the gpt search component which has gpt search bar & gpt recommandations components
 */

const Browse = () =>{

    useNowPlayingMovies();
    usePopularMovies();
    useUpcomingMovies();
    useTopRatedMovies();

    const gptSearchState = useSelector(store=>store.gpt?.showGptSearch);
    

    return (
        <div>
            <div>
                <Header/>
            </div>
            <div>
                {gptSearchState ? <GptSearch/> : 
                <>
                    {/**
                     * design of the browse page
                     * - main container
                     *  - movie video background
                     *  - movie title & details
                     * - secondary container
                     *  - movies categories * n
                     *   - movies card * n
                     */}
                    <MainContainer/>
                    <SecondaryContainer/>
                </>}
            </div>
        </div>
    )
};
export default Browse;