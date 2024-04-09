import React from 'react'
import { useTopRated } from '../../../../hooks/useTopRated';
import { Alert } from "bootstrap";
import MovieSlider from "../../../../common/movieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive"


const TopRated = () => {
const {data, isLoading, isError,error} = useTopRated()
if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
    <MovieSlider title="TopRated Movies" movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default TopRated
