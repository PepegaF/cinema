import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import { AdminService } from '@/services/admin/admin.service'
import React from 'react'
import { useQuery } from 'react-query'
import { MovieService } from '@/services/movie/movie.service';
import { IMovie } from '@/shared/types/movie.types';
import SubHeading from '@/components/ui/heading/SubHeading';
import Link from 'next/link';
import { getMovieUrl } from '@/configs/url.config';
import Image from 'next/image';
import styles from '../Admin.module.scss'

const PopularMovie = () => {
  const { isLoading, data } = useQuery('Most popular movie in admin', () => MovieService.getMostPopularMovies(), {
    select: (data): IMovie => data[0]
  })
  return (
    <div className={`${styles.block} ${styles.popular}`}>
      <SubHeading title='The most popular movie' />
      {isLoading ? <SkeletonLoader className='h-48' />
        : data && <><h3>Opened {data.countOpened} times</h3>
          <Link href={getMovieUrl(data.slug)}><Image width={285} height={175} src={data.bigPoster} alt={data.title} className={styles.image} unoptimized /> </Link>
        </>
      }
      {/* <div className={styles.description}></div> */}
    </div>
  )
}

export default PopularMovie