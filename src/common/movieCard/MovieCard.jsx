import React from "react";
import { Badge } from "react-bootstrap";
import "./movieCard.style.css"
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";

const MovieCard = ({movie}) => {

  const {data:genreData} = useMovieGenreQuery()
  console.log("ggg",genreData)
  const showGenre = (genreIdList) =>{
    //장르데이터가 도착하지않으면 빈값 리턴.
    if(!genreData) return []
    // 매개변수받은 값을 맵함수를 이용해서 전체를 뽑아준다. 
    // useMovieGenreQuery hook을 이용한 데이터에서 find함수를 이용해 같은 id 찾기.
    // genreObj에 담아 name 값을 genreNameList에 담아 리턴
    const genreNameList = genreIdList.map((id)=>{
      const genreObj = genreData.find((genre)=>genre.id === id)
      return genreObj.name
    })
    return genreNameList
  }
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {/*데이터 장르 아이디값을 쇼장르함수에 매개변수로 받는다 쇼장르함수 실행  */}
        {showGenre(movie.genre_ids).map((genre,index)=>(<Badge bg="danger" key={index}>{genre}</Badge>))}
        <div>{movie.vote_average}</div>
        <div>{movie.popularity}</div>
        <div>{movie.adult?"over18":"under18"}</div>
      </div>
    </div>
    
  );
};

export default MovieCard;
