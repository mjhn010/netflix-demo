import React, { useEffect, useState } from "react";
import { useSearchMovie } from "../../hooks/useSearchMovie";
import { useSearchParams } from "react-router-dom";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import Alert from "react-bootstrap/Alert";
import MovieCard from "../../common/movieCard/MovieCard";
import ReactPaginate from "react-paginate";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Moviepages.style.css";
import { useMovieGenreQuery } from "../../hooks/useMovieGenre";
import { isCompositeComponent } from "react-dom/test-utils";

//경로2가지
//nav바에서 클릭해서 온경우 => popularMovie 보여주기
//keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

//페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const [page, setPage] = useState(1);
  const keyword = query.get("q");
  const [data, setData] = useState(null);
  const [active, setActive] = useState("");
  // const [genre, setGenre] = useState(null);
  const [sort, setSort] = useState([])
  const [filterData, SetFilterData] = useState([]);
  const handlePageClick = ({ selected }) => {
    setPage(selected + 1);
  };
  const {
    data: searchData,
    isLoading,
    isError,
    error,
  } = useSearchMovie({ keyword, page });
  const { data: genreData } = useMovieGenreQuery();
  console.log("ddd", data);
  useEffect(() => {
    if (searchData) {
      setData(searchData);
    }
  }, [searchData]);
  useEffect(() => {
    SetFilterData(data?.results);
  }, [data]);
  // useEffect(() => {
  //   if (genre) {
  //     filterMovie();
  //   }
  // }, [genre]);
  // useEffect(()=>{
  //   if(sort){
  //     selectGenreHandler()
     
  //   }
    
  // },[sort])
  if (isLoading) {
    return (
      <div className="spinner-area">
        <Spinner
          animation="border"
          variant="danger"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>
    );
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }

  //
  // const filterMovie = () => {
  //   const filterMovie = data.results?.filter((movie) => {
  //     return movie.genre_ids.includes(genre.id);
  //   });
  //   setData({ ...data, results: filterMovie });
  // };

  //같은 아이디 값 찾기. state에 저장.
  const selectGenreHandler = (item, event) => {
    const filterGenreMovie = data.results?.filter((movie) => {
      return movie.genre_ids.includes(item.id);
    });
    console.log(event.target.value == item);
    setActive(item);
    SetFilterData(filterGenreMovie);
  };
  const sortMovieHandler = () =>{
    const sortMovie = data.results.map((movie)=>{
      console.log(movie.popularity)
      return setSort(movie.popularity) 
    })
    // setData({...data,results:sortMovie})
  }
  return (
    <Container>
      <div className="sort-genre-box">
        {/* <div className="sort">
          <button className="sort-btn">정렬기준</button>
        </div> */}
        <div className="genre">
          {genreData?.map((item, index) => (
            <button
              className={`genre-btn ${item === active ? "active-color" : ""}`}
              onClick={(event) => selectGenreHandler(item, event)}
              key={index}
              item={item}
              value={item}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {/* <Row>
        <Col lg={4} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row>
          
          </Row>
        </Col>
      </Row> */}
        <div>
        <button onClick={()=>sortMovieHandler()}>인기많은순</button>
        <button>인기적은순</button>
      </div>
      <div className="flex-box">
        {filterData?.map((movie, index) => (
          <div className="card-box" key={index}>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
      <ReactPaginate
        nextLabel={<FiChevronRight />}
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        marginPagesDisplayed={2}
        pageCount={data?.total_pages}
        previousLabel={<FiChevronLeft />}
        pageClassName="page-item"
        pageLinkClassName="page-link-b"
        previousClassName="page-item"
        previousLinkClassName="page-link-b"
        nextClassName="page-item"
        nextLinkClassName="page-link-b"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link-b"
        containerClassName="pagination"
        activeClassName="active"
        activeLinkClassName="link-active"
        renderOnZeroPageCount={null}
        forcePage={page - 1}
      />
    </Container>
  );
};

export default MoviePage;
