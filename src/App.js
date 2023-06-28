import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router , Routes , Route} from "react-router-dom"
import Header from './components/header/Header';
import Home from "./page/home/Home";
import Movielist from './components/movielist/Movielist';
import MovieDetail from './page/moviedetail/MovieDetail';
function App() {
  return (
    <div className="App">

      <Router>
        <Header/>
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path="movie/:id" element= {<MovieDetail/>}></Route>
          <Route path="movies/:type"  element = {<Movielist/>}></Route>
          <Route path="/*"  element = {<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
