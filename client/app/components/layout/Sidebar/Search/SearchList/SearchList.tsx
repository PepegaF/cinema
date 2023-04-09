import Link from 'next/link';
import React from 'react'
import { FC } from 'react';
import { IMovie } from 'shared/types/movie.types';
import styles from './SearchList.module.scss'
import Image from 'next/image';
import { getMoviesUrl } from '@/configs/api.config';

const SearchList: FC<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <div className={styles.list}>
      {movies.length
        ? movies.map(movie => (
          <Link key={movie._id} href={getMoviesUrl(movie.slug)}>
            <Image src={movie.poster} width={50} height={50} alt={movie.title} draggable={false} />
            <span>{movie.title}</span>
          </Link>
        ))
        : <div>Movies not found</div>
      }
    </div>
  )
}

export default SearchList