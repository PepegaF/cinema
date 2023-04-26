import { IMovie } from '@/shared/types/movie.types';
import React from 'react'
import { FC } from 'react';
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton';
import styles from './Favorites.module.scss'
import { getMovieUrl } from '@/configs/url.config';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '@/hooks/useAuth';

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
  const { user } = useAuth()
  return (
    <div className={styles.itemWrapper}>
      {user && <FavoriteButton movieId={movie._id} />}
      <Link href={getMovieUrl(movie.slug)} className={styles.item}>
        <Image alt={movie.title} src={movie.bigPoster} fill priority draggable={false} />
      </Link>
    </div>
  )
}

export default FavoriteItem