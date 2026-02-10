import { OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/moviesSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

const useNowPlayingMovies = () => {
    const nowPlayingMoviesInStore = useSelector(store=>store.movies.nowPlayingMovies);

    const dispatch = useDispatch();
    const nowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing", OPTIONS);
        const jsonData = await data.json();
        dispatch(addNowPlayingMovies(jsonData.results));
    }

    useEffect(()=>{
        // make the call only if the store does not have the data
        !nowPlayingMoviesInStore && nowPlayingMovies();
    }, []);

};

export default useNowPlayingMovies;