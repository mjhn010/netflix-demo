import React from 'react'
import { useRecommendations } from '../../hooks/useRecommendations'
import { useParams } from 'react-router-dom'
import { Alert } from "bootstrap";
import MovieSlider from '../../common/movieSlider/MovieSlider';
import { responsive } from '../../constants/responsive';
const Recommend = () => {
   const {id} = useParams()
    const {data:recommend,isError,error,isLoading} = useRecommendations({id})
    console.log("rrr",recommend?.results)
    if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <MovieSlider title="추천영화" movies={recommend?.results} responsive={responsive}/>
    </div>
  )
}

export default Recommend
