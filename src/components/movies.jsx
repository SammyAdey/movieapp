import React from 'react';

const Movies = (props) => {

    return (
        <div className="moviesList">
                {props.movies.map((movie, index) => (
                <div className="moviePoster">
                    <img src={movie.Poster} alt='movie'></img>
                    {console.log(movie)}
                </div>
                ))}
            </div>
    )


}

export default Movies; 