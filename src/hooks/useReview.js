import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useReview = ({id}) =>{
    const fetchUseReview = ({id}) =>{
        return api.get(`/movie/${id}/reviews`)
    }
    return useQuery({
        queryKey:["useReview",{id}],
        queryFn:()=>fetchUseReview({id}),
        select:(result)=>result.data.results
    })
}