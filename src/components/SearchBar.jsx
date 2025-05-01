import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ query, setQuery, fetchMovies }) => {
  const [placeholderText, setPlaceholderText] = useState("Search for Avenger...");
  const [currentIndex, setCurrentIndex] = useState(0);

  const movieNames = [
    "Inception", "Interstellar", "The Dark Knight", 
    "Avengers: Endgame", "Titanic", "The Matrix", "Forrest Gump"
  ];

  useEffect(() => {
    let interval;

    const updatePlaceholder = () => {
      let currentMovie = movieNames[Math.floor(Math.random() * movieNames.length)];
      let currentText = placeholderText;
      let newText = `${currentMovie}...`;

      // Step 1: Erase placeholder text letter by letter
      const erase = () => {
        if (currentText.length > 11) {
          currentText = currentText.slice(0, -1);
          setPlaceholderText(currentText);
        } else {
          clearInterval(eraseInterval);
          // After erasing, type new placeholder text
          typeNewText(newText);
        }
      };

      const eraseInterval = setInterval(erase, 80); // Change letters every 100ms

      // Step 2: Type new placeholder text letter by letter
      const typeNewText = (currentMovie) => {
        let index = -1;
        const typeInterval = setInterval(() => {
          if (index < currentMovie.length) {
            setPlaceholderText((prevText) => prevText + currentMovie.charAt(index));
            index++;
          } else {
            clearInterval(typeInterval);
          }
        }, 100); // Change letters every 100ms
      };
    };

    interval = setInterval(updatePlaceholder, 2000); // Change every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [placeholderText]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMovies(query);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-bar input"
        type="text"
        placeholder={placeholderText}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
      <button className="search-bar button" type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
