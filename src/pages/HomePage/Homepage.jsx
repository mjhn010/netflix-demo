import React from 'react'
import Banner from './component/Banner/Banner'
import PopularMovieSlide from './component/popularMovieSlide/PopularMovieSlide'


//배너 => popular 영화를 들고와서 첫번쨰 아이템을 보여주자
//popular movie
// top rated movie
// upcoming movie
const Homepage = () => {
  return (
    <div>
      <Banner/>
      <PopularMovieSlide/>
    </div>
  )
}

export default Homepage
