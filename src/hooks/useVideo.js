import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

const fetchUseVideo = ({id})=>{
    return api.get(`/movie/${id}/videos?language=ko`)
}
export const useVideo = ({id}) =>{
    return useQuery({
        queryKey:["useVideo",{id}],
        queryFn:()=> fetchUseVideo({id}),
        select:(result)=>result.data.results

    })
}