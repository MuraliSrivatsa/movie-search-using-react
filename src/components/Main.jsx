import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import '../App.css';
import { Link } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_API_KEY;

function Main() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showTopBtn, setShowTopBtn] = useState(false);

  const fetchMovies = async (searchTerm) => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`);
      const data = await response.json();
      if (data.Response === 'True') {
        setMovies(data.Search);
      } else {
        setError(data.Error || 'No results found.');
        setMovies([]);
      }
    } catch (err) {
      setError('Something went wrong. Please try again later.');
      setMovies([]);
    }
    setLoading(false);
  };

  // Show scroll to top button only when user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>🎬 Movie Explorer</h1>
        <p>Search for your favorite movies</p>
      </header>

      <main className="main-content">
        <section className="search-section">
          <SearchBar query={query} setQuery={setQuery} fetchMovies={fetchMovies} />
        </section>

        <section className="results-section">
          {loading && <p className="loading">Loading movies...</p>}
          {error && <p className="error">{error}</p>}
          {!loading && !error && <MovieList movies={movies} />}
        </section>
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} Movie Explorer.</p>
        <Link to="/about" className='about'>About</Link>
      </footer>

      {/* Scroll to top button */}
      {showTopBtn && (
        <button className="scroll-to-top" onClick={scrollToTop} title="Back to top">
          ⬆
        </button>
      )}
    </div>
  );
}

export default Main;
