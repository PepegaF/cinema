import Catalog from '@/components/ui/catalog-movies/Catalog'
import { MovieService } from '@/services/movie/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

const TrendingPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <Catalog movies={movies || []} title='Trending movies' description='Trending movies in excellent quality: legal, safe' />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const movies = await MovieService.getMostPopularMovies()

    return {
      props: { movies }
    }
  } catch (error) {
    console.log(errorCatch(error))
    return {
      notFound: true
    }

  }
}

export default TrendingPage