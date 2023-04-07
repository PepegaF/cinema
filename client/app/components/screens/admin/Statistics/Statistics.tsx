import React from 'react'
import styles from '../Admin.module.scss'
import CountUsers from './CountUsers';
import PopularMovies from 'components/layout/Sidebar/MoviesContainer/PopularMovies';
import PopularMovie from './PopularMovie';

const Statistics = () => {
  return (
    <div className={styles.statistics}>
      <CountUsers />
      <PopularMovie />
    </div>
  )
}

export default Statistics