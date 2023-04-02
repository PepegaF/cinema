import React from 'react'
import { FC } from 'react';
import { IMovieList } from './movie-list.interface';
import styles from './MoviesList.module.scss'

const MoviesList: FC<IMovieList> = ({ title, link, movies }) => {
  return (
    <div>MoviesList</div>
  )
}

export default MoviesList