import React from 'react';

const Movies = (props) => {

    return (
        <div className="moviesList">
                {props.movies.map((movie, index) => (
                <div className="movieItem">
                <div className="moviePoster">
                    <img src={movie.Poster} alt='movie'></img>
                    {console.log(movie)}
                </div>    
                <div className="movieInfo">
                    <div className="movieInfoBottom">
                        <h1>{movie.Title}</h1>
                        <div className="movieInfoSubtitle"><p>{movie.Year} <span> | </span> {movie.Type}</p></div>
                    </div>
                    

                </div>
                </div>
                ))}
            </div>
    )


}

export default Movies; 