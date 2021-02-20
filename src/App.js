import React, { useState, useEffect } from "react";
import "./App.css";
import Movies from "./components/movies";
import Logo from "./assets/movie-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import Search from "./components/search";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=a8f1cd5`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);

  return (
    <div className='Body'>
      <div className='bodyContainer'>

      <header className='header'>
        <div className='NavBar'>
          <div className='NavBar-Inner'>
            <div className='Logo'>
              <img className='Logo' src={Logo} />
            </div>
            <div className='menuRight'>
              <Search
                searchValue={searchValue}
                setSearchValue={setSearchValue}
              />
              <div className='LogIn'>Log In</div>
              <div className='WishList'>
                <GiHamburgerMenu size={25} />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <slider />
        <div className='movieSection'>
          <Movies movies={movies} />
          {console.log(movies)}
        </div>
      </main>
    </div>
    </div>
  );
}

export default App;
