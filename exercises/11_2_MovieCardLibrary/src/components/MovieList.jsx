import React from 'react';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((mv) => <MovieCard key={mv.title} movie={mv} />)}
      </div>
    );
  }
}

export default MovieList;
