import { OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const usePopularMovies = () => {

    const dispatch = useDispatch();
    const nowPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular", OPTIONS);
        const jsonData = await data.json();
        dispatch(addPopularMovies(jsonData.results));
    }

    useEffect(()=>{
        nowPopularMovies();
    }, []);

};

export default usePopularMovies;