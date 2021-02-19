import React, { useState, useEffect }from "react";
import './App.css';
import Nav from "./components/nav";
import Movies from './components/movies'

function App() {
  const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('');

    const getMovieRequest = async () => {

        const url = 'http://www.omdbapi.com/?s=star wars&apikey=a8f1cd5';
        const response = await fetch(url);
        const responseJson = await response.json();

        console.log(responseJson);
        setMovies(responseJson.Search)
      };

      useEffect(() => {
          getMovieRequest();
      }, []);


    return (
      <div className="Body">
          <header className="header">
              <Nav  />
          </header>
          <main>
            <slider />
            <div className="movieSection">
              <Movies movies={movies} />
              {console.log(movies)}
            </div>
          </main>
      </div>
  )
}

export default App; 
