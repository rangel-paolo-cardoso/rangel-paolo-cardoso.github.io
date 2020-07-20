import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';

function App() {
  return (
    <div>
      <Header />
      <MovieList movies={data} />
    </div>
  );
}

export default App;
