/**
 * title
 * movie cards
 * @returns 
 */
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({title, data}) => {
    return(
        <div className="px-10">
            <h1 className="text-2xl py-4 text-white">{title}</h1>
            <div className="flex overflow-x-scroll">
            <div className="flex">
                {data?.map(mov => (
                    <MovieCard key={mov?.id} posterPath={mov?.poster_path}/>
                ))}
            </div>
            </div>
        </div>
    )
};

export default MovieList;