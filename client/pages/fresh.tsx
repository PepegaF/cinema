import Catalog from '@/components/ui/catalog-movies/Catalog'
import { MovieService } from '@/services/movie/movie.service'
import { IMovie } from '@/shared/types/movie.types'
import { errorCatch } from 'api/api.helpers'
import { GetStaticProps, NextPage } from 'next'
import React from 'react'

const FreshPage: NextPage<{ movies: IMovie[] }> = ({ movies }) => {
  return (
    <Catalog movies={movies || []} title='Fresh movies' description='New movies and series in excellent quality: legal, safe' />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getMovies()

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

export default FreshPage