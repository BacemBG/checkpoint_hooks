
import React, {useState} from 'react';
import { movieData } from './Data';
import './App.css';
import MovieList from './components/MovieList';
import Filter from './components/Filtre';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState(movieData);
  const [searchTitle, setSearchTitle]= useState("")
  const [searchRating, setSearchRating]= useState(0)

  const handleMovie = (newMovie)=>{
    setMovies([...movies,newMovie])
  }
console.log(movies)
  return (
   <div>
     <Filter setSearchTitle={setSearchTitle} setSearchRating={setSearchRating} />
     { <AddMovie handleMovie={handleMovie} /> }
     <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating} />
   </div>
  );
}

export default App;