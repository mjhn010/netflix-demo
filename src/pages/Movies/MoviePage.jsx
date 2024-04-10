import React, { useState } from 'react'
import { useSearchMovie } from '../../hooks/useSearchMovie'
import { useSearchParams } from 'react-router-dom'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import Alert from "react-bootstrap/Alert";
import MovieCard from '../../common/movieCard/MovieCard';
import ReactPaginate from 'react-paginate';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Moviepages.style.css"

//경로2가지
//nav바에서 클릭해서 온경우 => popularMovie 보여주기
//keyword를 입력해서 온경우 => keyword와 관련된 영화들을 보여줌

//페이지네이션 설치
// page state 만들기
// 페이지네이션 클릭할때마다 page 바꿔주기
// page 값이 바뀔때마다 useSearchMovie에 page까지 넣어서 fetch
const MoviePage = () => {
  const [query, setQuery] = useSearchParams()
  const [page,setPage] = useState(1)
  const keyword = query.get("q")
  const handlePageClick = ({selected})=>{
    setPage(selected +1);
  }
  const {data,isLoading,isError,error} = useSearchMovie({keyword,page})
  console.log("ddd",data)
  if (isLoading) {
    return(
      <div className='spinner-area'>
        <Spinner
        animation='border'
        variant='danger'
        style={{width:"5rem",height:"5rem"}}
        />
      </div>
    )
  }
  if (isError) {
    return <Alert variant="danger">{error.message}</Alert>;
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}></Col>
        <Col lg={8} xs={12}>
          <Row>
          {data?.results.map((movie,index)=>(<Col key={index}><MovieCard movie={movie}/></Col>))}
          </Row>
        </Col>
      </Row>
      <ReactPaginate
        nextLabel={<FiChevronRight/>}
        onPageChange={handlePageClick}
        pageRangeDisplayed={data?.total_pages}
        marginPagesDisplayed={2}
        pageCount={data?.total_pages}
        previousLabel={<FiChevronLeft/>}
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
        activeLinkClassName='link-active'
        renderOnZeroPageCount={null}
        forcePage={page-1}
        
      />
    </Container>
  )
}

export default MoviePage
