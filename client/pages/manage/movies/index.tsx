import MovieList from '@/components/screens/admin/movies/MovieList'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const MovieListPage: NextPageAuth = () => {
  return (
    <MovieList />
  )
}

MovieListPage.isOnlyAdmin

export default MovieListPage