import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homepage from './pages/HomePage/Homepage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFoundpage/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './layout/layout.style.css'
//홈페이지
//영화 전체 보여주는 페이지 (서치)/movies
// 영화 디테일 페이지/movies/:id
//추천영화 /movies/:id/recomanddation
function App() {
  return (
    <Routes>
      <Route path='/' element={<AppLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='movies'>
          <Route index element={<MoviePage/>}/>
          <Route path=':id' element={<MovieDetailPage/>}/>
        </Route>
        {/* <Route path='/movies' element={<MoviePage/>}/>
        <Route path='/movies/:id' element={<MovieDetailPage/>}/> */}
      </Route>
      <Route path='*' element={<NotFoundPage/>}/>
    </Routes>
      
    
  );
}

export default App;
