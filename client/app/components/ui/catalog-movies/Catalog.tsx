import React, { FC } from 'react'
import { ICatalog } from './catalog.interface'
import Meta from '@/utils/meta/Meta'
import Heading from '../heading/Heading'
import Description from '../heading/Description'
import GalleryItem from '../gallery/GalleryItem'
import { getMovieUrl } from '@/configs/url.config'
import styles from './Catalog.module.scss'

const Catalog: FC<ICatalog> = ({ movies, title, description }) => {
  return (
    <Meta title={title} description={description}>
      <Heading title={title} className={styles.heading} />

      {description && <Description text={description} />}

      <section className={styles.movies}>
        {movies.map(movie => <GalleryItem key={movie._id} variant='horizontal' item={{
          name: movie.title,
          link: getMovieUrl(movie.slug),
          posterPath: movie.bigPoster,
          content: {
            title: movie.title
          }
        }}
        />)}
      </section>
    </Meta>
  )
}

export default Catalog