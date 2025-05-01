import React from 'react';
import './MovieCard.css';

const MovieCard = ({ movie }) => {
    console.log(movie)
    const imdbUrl = `https://www.imdb.com/title/${movie.imdbID}`;
    const handleClick = () =>{
        window.open(imdbUrl, '_blank', 'noopener,noreferrer')
    }
  return (
    <div className="movie-card">
      <img
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'}
        alt={movie.Title}
      />
      <div className="movie-info">
        <h3>{movie.Title}</h3>
        <p>{movie.Year}</p>
        <button  className="imdb" onClick={handleClick}>Watch Now</button>
      </div>
    </div>
  );
};

export default MovieCard;
