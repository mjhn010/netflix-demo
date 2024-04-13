import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useDetail = ({id}) =>{
    const fetchUseDetail = ({id})=>{
        return api.get(`/movie/${id}?language=ko`)
    }
    return useQuery({
        queryKey:["useDetail",{id}],
        queryFn:()=>fetchUseDetail({id}),
        select:(result)=>result.data

    })
}