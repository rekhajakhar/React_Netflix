import { OPTIONS } from "../utils/constants";
import { addUpcomingMovies } from "../utils/moviesSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const useUpcomingMovies = () => {

    const dispatch = useDispatch();
    const upComingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming", OPTIONS);
        const jsonData = await data.json();
        dispatch(addUpcomingMovies(jsonData.results));
    }

    useEffect(()=>{
        upComingMovies();
    }, []);

};

export default useUpcomingMovies;