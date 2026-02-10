/**
 * show the image of the movie i.e. thumbnail
 */
import React from "react";
import { MOVIE_POSTER_BASE_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    if(!posterPath) return null;
    return (
        <div className="pr-2 w-36">
            <img alt="movie poster" src={MOVIE_POSTER_BASE_URL + posterPath}/>
        </div>
    )
};

export default MovieCard;