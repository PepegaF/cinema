import { useFavorites } from '@/components/screens/favorites/useFavorites';
import { useAuth } from '@/hooks/useAuth';
import React from 'react'
import { FC } from 'react';
import NotAuthFavorites from './NotAuthFavorites';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import MoviesList from '../MoviesList';

const FavoriteMovieList: FC = () => {
  const { isLoading, favoritesMovies } = useFavorites()
  const { user } = useAuth()

  if (!user) return <NotAuthFavorites />

  return isLoading ? (
    <div className="mt-11">
      <SkeletonLoader count={3} className="h-28 mb-4" />
    </div>
  ) : (
    <MoviesList title='Favorites' link='/favorites' movies={favoritesMovies?.slice(0, 3) || []} />
  )
}

export default FavoriteMovieList
