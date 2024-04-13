import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../../common/movieCard/MovieCard";
const MovieSlider = ({title,movies,responsive,}) => {
  return (
    <div>
      <div>
      <h3 style={{color:"#e5e5e5"}}>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={true}
        containerClass="carousel-container"
        itemClass="movie-slider p-1"
        responsive={responsive}
        
      >
        {movies.map((movie,index)=><MovieCard movie={movie} key={index}/>)}
      </Carousel>
      
    </div>
    </div>
  )
}

export default MovieSlider
