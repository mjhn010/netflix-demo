import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useTopRated = ()=>{
    console.log(api)
    const fetchTopRatedMovies = () =>{
        return api.get(`movie/top_rated?`)
    }
    return useQuery({
        queryKey:["movie-topRated"],
        queryFn:fetchTopRatedMovies,
        select:(result)=>result.data
    })
}