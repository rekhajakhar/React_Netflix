import React from "react";
import language from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import openai from "../utils/openai";
import { OPTIONS } from "../utils/constants";
import { addRecommendedMovies } from "../utils/gptSlice"

const GptSearchBar = () => {
    const searchText = useRef(null);
    const dispatch = useDispatch();

    const lang = useSelector(store=>store.config?.lang);

    const fetchMovieDetailsFromTMDB = async (movie) => {
        const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, OPTIONS);
        const json = await data.json();
        return json.results;
    }

    const handleSearchClick = async () => {
        const query = "Act as a movie recommendation system and suggest some movies for the query : " + searchText.current.value + ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        console.log(searchText.current.value)
        // const response = await openai.responses.create({
        // model: "gpt-5-mini",
        // input: query,
        // });
        // console.log(response.output_text);

        const response = await openai.chat.completions.create({
            model: "llama-3.3-70b-versatile", // Use a Groq model name
            messages: [{ role: "user", content: query }],
        });

        console.log(response.choices[0].message.content);
        // convert this string into array & call tmdb search api to get the details of each movie.
        const movies = response.choices[0].message.content.split(",");

        const moviesResultFromTMDB = movies.map((mov)=>fetchMovieDetailsFromTMDB(mov));

        const movieResultResolved = await Promise.all(moviesResultFromTMDB);

        console.log(movieResultResolved);

        //add these to store
        dispatch(addRecommendedMovies({openAiMovieSuggestions: movies, tmdbMovieResult: movieResultResolved}));

    }
    return (
            <div className="flex justify-center pt-30">
                <form className="w-1/2 bg-black grid grid-cols-12 rounded-lg" onSubmit={(e)=>e.preventDefault()}>
                    <input 
                    ref={searchText}
                    type="text" 
                    placeholder={language[lang].gptSearchPlaceholder} 
                    className="text-white p-4 m-4 z-100 col-span-9"/>
                    <button className="col-span-3 bg-red-700 text-white m-4 py-2 px-4 rounded-lg" onClick={handleSearchClick}>{language[lang].search}</button>
                </form>
            </div>
    )
};

export default GptSearchBar;