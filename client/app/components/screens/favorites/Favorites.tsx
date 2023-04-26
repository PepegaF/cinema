import React from 'react'
import { FC } from 'react';
import styles from './Favorites.module.scss'
import Meta from '@/utils/meta/Meta';
import Heading from '@/components/ui/heading/Heading';
import { useFavorites } from './useFavorites';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';
import FavoriteItem from './FavoriteItem';
import { getMovieUrl } from '@/configs/url.config';
import { useAuth } from '@/hooks/useAuth';

const Favorites: FC = () => {
  const { favoritesMovies, isLoading } = useFavorites()
  const { user } = useAuth()
  if (!user) return null

  return (
    <Meta title="Favorites">
      <Heading title={'Favorites'} />
      <section className={styles.favorites}>
        {isLoading
          ? <SkeletonLoader count={3} className={styles.skeletonLoader} containerClassName={styles.containerLoader} />
          : favoritesMovies?.map((movie) => <FavoriteItem key={movie._id} movie={movie} />)
        }
      </section>
    </Meta>
  )
}

export default Favorites
