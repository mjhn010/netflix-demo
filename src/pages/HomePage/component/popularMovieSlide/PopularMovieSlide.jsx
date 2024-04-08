import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usepopularMovies";
import { Alert } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../movieCard/MovieCard";
import "./popularMovieSlide.style.css"


const PopularMovieSlide = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          
        }
      };
  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <div>
      <h3>Popular Movies</h3>
      <Carousel
        
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="movie-slider p-1"
        responsive={responsive}
      >
        {data.results.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
      </Carousel>
      
    </div>
  );
};

export default PopularMovieSlide;
