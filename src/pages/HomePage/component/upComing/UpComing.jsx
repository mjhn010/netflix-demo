import React from 'react'
import { Alert } from "bootstrap";
import { useUpComing } from '../../../../hooks/useUpComing';
import MovieSlider from "../../../../common/movieSlider/MovieSlider";
import {responsive} from "../../../../constants/responsive"
const UpComing = () => {
const {data, isLoading, isError,error} = useUpComing()
if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
    <MovieSlider title="Upcoming movies" movies={data.results} responsive={responsive}/>
    </div>
  )
}

export default UpComing
