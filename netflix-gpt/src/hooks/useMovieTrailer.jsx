import { useEffect } from "react";
import { OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const trailerInStore = useSelector(store=>store.movies.trailer);

    const fetchMovieTrailer = async() =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, OPTIONS);
        const json = await data.json();
        const filteredTrailers =json.results.filter(mov=>mov.type === "Trailer");
        const movieTrailer = filteredTrailers ? filteredTrailers[0] : json.results[0];

        dispatch(addTrailer(movieTrailer));
    }
    useEffect(()=>{
        !trailerInStore && fetchMovieTrailer();
    }, []);

}

export default useMovieTrailer;