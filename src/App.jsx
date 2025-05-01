import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Main from './components/Main';
import About from './components/About';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/"element={<Main/>}/>
      <Route path="/about"element={<About/>}/>
      
      </Routes>
    </Router>

  );
}

export default App;