import React from 'react'
import { FC } from 'react';
import { IMovie } from 'shared/types/movie.types';
import styles from './MoviesList.module.scss'
import Link from 'next/link';
import Image from 'next/image';
import { getGenresListEach } from 'utils/movie/getGenresList';
import { MdStarRate } from 'react-icons/md';
import { getMovieUrl } from '@/configs/url.config';
import { getGenresUrl } from '@/configs/api.config';
import { MaterialIcon } from '@/components/ui/icons/MaterialIcon';

const MovieItem: FC<{ movie: IMovie }> = ({ movie }) => {
  return (
    <div className={styles.item}>
      <Link href={getMovieUrl(movie.slug)}>
        <Image width={65} height={95} src={movie.poster} alt={movie.title} draggable={false} priority />
      </Link>
      <div className={styles.info}>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.genres}>
          {movie.genres.map((genre, idx) =>
            <Link key={genre._id} href={getGenresUrl(genre.slug)}>{getGenresListEach(idx, movie.genres.length, genre.name)}</Link>
          )}
        </div>
        <div className={styles.rating}>
          <MaterialIcon name='MdStarRate' />
          <span>{movie.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  )
}

export default MovieItem