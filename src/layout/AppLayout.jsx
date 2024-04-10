import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import {Link} from "react-router-dom"
import logo from "../images/netflix (1).png"

const AppLayout = () => {
  const [keyword,setKeyword] = useState('');
  const navigate = useNavigate()
  const searchByKeyword = (event) =>{
    event.preventDefault()
    //url 변경해주기.
    navigate(`/movies?q=${keyword}`)
    setKeyword('')

  }
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container  fluid>
      <Link to="/"><img className='netflix-logo' src={logo}/></Link>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: '100px' }}
          navbarScroll
        >
          <Link className='nav-font' to="/">Home</Link>
          <Link className='nav-font' to="/movies">movies</Link>
        </Nav>
        <Form className="d-flex" onSubmit={searchByKeyword}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={keyword}
            onChange={(event)=>setKeyword(event.target.value)}
          />
          <Button onClick={searchByKeyword} className='search-btn' variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Outlet/>
  </div>
  )
}

export default AppLayout
