import { useQuery } from "@tanstack/react-query";
import api from "../utils/api";

export const useUpComing = ()=>{
    const fetchUseUpComing =()=>{
        return api.get("/movie/upcoming")
    }
return useQuery({
    queryKey:["upcoming-movies"],
    queryFn:fetchUseUpComing,
    select:(result) => result.data
})
}