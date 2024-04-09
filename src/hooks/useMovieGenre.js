import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

export const useMovieGenreQuery = () =>{
    const fetchUseMovieGenre = () =>{
       return api.get("/genre/movie/list")
    }
    return useQuery({
        queryKey:["movie-genre"],
        queryFn:fetchUseMovieGenre,
        select:(result)=>result.data.genres,
        staleTime:300000 // 5분 ms

    })
}