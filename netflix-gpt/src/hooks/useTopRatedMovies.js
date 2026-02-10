import { OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useTopRatedMovies = () => {

    const dispatch = useDispatch();
    const topRatedMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated", OPTIONS);
        const jsonData = await data.json();
        dispatch(addTopRatedMovies(jsonData.results));
    }

    useEffect(()=>{
        topRatedMovies();
    }, []);

};

export default useTopRatedMovies;