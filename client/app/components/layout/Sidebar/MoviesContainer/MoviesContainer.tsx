import React from 'react'
import { FC } from 'react';
import PopularMovies from './PopularMovies';
import FavoriteMovies from './FavoriteMovies/FavoriteMovies';

const MoviesContainer: FC = () => {
  return (
    <>
      <PopularMovies />
      <FavoriteMovies />
    </>
  )
}

export default MoviesContainer