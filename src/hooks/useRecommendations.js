import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";



export const useRecommendations = ({id}) =>{
    const fetchRecommendations = ({id}) =>{
        return api.get(`/movie/${id}/recommendations?language=ko`)
    }
    return useQuery({
        queryKey:["useRecommendations",{id}],
        queryFn:()=>fetchRecommendations({id}),
        select:(result) =>result.data
        
    })
}