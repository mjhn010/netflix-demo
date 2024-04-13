import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDetail } from "../../hooks/useDetail";
import { useVideo } from "../../hooks/useVideo";
import "./MovieDetail.style.css";
import { Badge, Container,Button } from "react-bootstrap";
import YouTube from "react-youtube";
import Banner from "../HomePage/component/Banner/Banner";
import { FaForwardStep } from "react-icons/fa6";
import star from "../../images/star.png"
import like from "../../images/like.png"

import MovieDetailModal from "./modal/MovieDetailModal";
import Recommend from "./Recommend";
import Review from "./Review";

const MovieDetailPage = () => {
  const { id } = useParams();
  const { data: detailData, isLoading, IsError, error } = useDetail({ id });
  const { data: VideoData } = useVideo({ id });
  const {modalOn,SetModalOn} = useState(false)
  // console.log("dede", VideoData);
  console.log("ddd", detailData);
  
  const modalStart = () =>{
    SetModalOn(!modalOn)
  }
  return (
    <div>
      <div
        className="detail-banner"
        style={{
          backgroundImage:
            "url(" +
            `https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces/${detailData?.backdrop_path}` +
            ")",
        }}
      ></div>
      <Container>
        <div className="movie-detail">
          <div className="detail-img-box">
          <img className="detail-img"
            src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2/${detailData?.poster_path}`}
          />
          </div>
          <div className="detail-text-box">
            <div className="de-genre-text">
            {detailData?.genres.map((genres)=>(<Badge className="de-genre" bg="danger">{genres?.name}</Badge>))}
            </div>
            <div className="title-box">
              <h1 className="detail-title">{detailData?.title}</h1>
            </div>
            <div className="vote-average-box">
              <div className="vote-average">
              <img className="star-icon" src={star}/>
              {detailData?.vote_average}
              </div>
              {/* <div className="like-box">
              <img className="like-icon" src={like}/>
              <div className="like">
              {detailData?.popularity}
              </div>
            </div> */}
            </div>
          <div className="overview">
            {detailData?.overview}
          </div>
          <div className="runtime-box">
            <div className="flex-box">
              <Badge className="sub-title" bg="danger">Budget</Badge>
              <div>${detailData?.budget.toLocaleString()}</div>
            </div>
            <div className="flex-box">
            <Badge className="sub-title" bg="danger">Release Date</Badge>
              <div>{detailData?.release_date}</div>
            </div>
            <div className="flex-box">
            <Badge className="sub-title" bg="danger">Runtime</Badge>
              <div>{detailData?.runtime}분</div>
            </div>
            <div className="flex-box center">
            <MovieDetailModal VideoData={VideoData}/>
            </div>
          </div>
          </div>
        </div>
        <div className="m-t-5">
        <Recommend/>
        </div>
        <div className="m-t-5">
          <h3 className="review-color">Review</h3>
        <Review/>
        </div>
      </Container>
    </div>
  );
};

export default MovieDetailPage;
