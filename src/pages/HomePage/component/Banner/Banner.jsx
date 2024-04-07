import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usepopularMovies'
import Alert from 'react-bootstrap/Alert';

const Banner = () => {
   const {data,isLoading,isError,error} = usePopularMoviesQuery()
   console.log("ddd",data)
   if(isLoading){
    return <h1>Loading</h1>
   }
   if(isError){
    return <Alert variant='danger'>{error.message}</Alert>
   }
  return (
    <div>
      
    </div>
  )
}

export default Banner
