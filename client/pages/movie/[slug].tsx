import Catalog from '@/components/ui/catalog-movies/Catalog'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie/movie.service'
import { IActor, IGenre, IMovie } from '@/shared/types/movie.types'
import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Error404 from '../404'
import { ActorService } from '@/services/actor.service'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import SingleMovie from '@/components/screens/single-movie/SingleMovie'
import { getMovieUrl } from '@/configs/url.config'

export interface IMoviePage {
  movie: IMovie
  similarMovies: IGalleryItem[]
}


const MoviePage: NextPage<IMoviePage> = ({ similarMovies, movie }) => {
  return (
    movie
      ? <SingleMovie similarMovies={similarMovies || []} movie={movie} />
      : <Error404 />
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: movies } = await MovieService.getMovies()
    const paths = movies.map(m => ({
      params: { slug: m.slug }
    }))

    return { paths, fallback: 'blocking' }

  } catch (error) {
    return {
      paths: [], fallback: false
    }
  }

}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const { data: movie } = await MovieService.getBySlug(String(params?.slug))
    const { data: dataSimilarMovies } = await MovieService.getByGenres(movie.genres.map(g => g._id))
    const similarMovies: IGalleryItem[] = dataSimilarMovies.slice(0, 7).filter(m => m._id !== movie._id).map(t => ({
      name: t.title,
      posterPath: t.poster,
      link: getMovieUrl(t.slug),
    }))

    return {
      props: { movie, similarMovies }
    }
  } catch (error) {
    console.log(errorCatch(error))
    return {
      notFound: true
    }

  }
}

export default MoviePage