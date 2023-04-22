import { IMovie } from '@/shared/types/movie.types';
import React from 'react'
import { FC } from 'react';
import FavoriteButton from '../single-movie/FavoriteButton/FavoriteButton';
import styles from './Favorites.module.scss'
import { getMovieUrl } from '@/configs/url.config';
import Link from 'next/link';
import Image from 'next/image';

const FavoriteItem: FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className={styles.itemWrapper}>
      <FavoriteButton movieId={movie._id} />
      <Link href={getMovieUrl(movie.slug)} className={styles.item}>
        <Image alt={movie.title} src={movie.bigPoster} fill priority draggable={false} />
      </Link>
    </div>
  )
}

export default FavoriteItem