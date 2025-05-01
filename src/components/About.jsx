import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';
import '../App.css';
import { Link } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div>
        <div className="App">
      <header className="app-header">
        <h1>🎬 Movie Explorer</h1>
        <p>Search for your favorite movies</p>
      </header>
      
      <div className="about-container">

      <h2>About</h2>
      <p>
        Hello there, This movie search app was built using the OMDb API and React to
        demonstrate dynamic searching, API integration, and clean UI practices.
      </p>
      <p>
      </p>
      <button className="home-button" onClick={handleBack}>
        🔍 Back to Movie Search
      </button>
    </div>


    <footer className="app-footer">
        <p>© {new Date().getFullYear()} Movie Explorer.</p>
        <Link to="/" className='about'>Home</Link>
      </footer>
    </div>
    </div>
  );
};

export default About;
