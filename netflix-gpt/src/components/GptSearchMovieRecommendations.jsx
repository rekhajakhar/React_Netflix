import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSeachMovieRecommendations = () => {
    const gpt = useSelector(store=>store.gpt);
    const { openAiMovieSuggestions, tmdbMovieResult } = gpt;
    if(!openAiMovieSuggestions || openAiMovieSuggestions.length === null) return;

    return(
        <div>
            {openAiMovieSuggestions.map((movie, index) => <MovieList key={movie} title={movie} data={tmdbMovieResult[index]}/>)}
        </div>
    )
};

export default GptSeachMovieRecommendations;