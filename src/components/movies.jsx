import React from 'react';

const Movies = (props) => {

    return (
        <div className="moviesList">
            <div></div>
                {props.movies.map((movie, index) => (
                <div>
                    <img src={movie.Poster} alt='movie'></img>
                </div>
                ))}
            </div>
    )


}

export default Movies; 