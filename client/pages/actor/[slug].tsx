import Catalog from '@/components/ui/catalog-movies/Catalog'
import { GenreService } from '@/services/genre.service'
import { MovieService } from '@/services/movie/movie.service'
import { IActor, IGenre, IMovie } from '@/shared/types/movie.types'
import { errorCatch } from 'api/api.helpers'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import React from 'react'
import Error404 from '../404'
import { ActorService } from '@/services/actor.service'

interface IActorPage {
  movies: IMovie[]
  actor: IActor | undefined
}


const ActorPage: NextPage<IActorPage> = ({ movies, actor }) => {
  return (
    actor
      ? <Catalog movies={movies || []} title={actor.name} />
      : <Error404 />
  )
}
export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const { data: actors } = await GenreService.getAll()
    const paths = actors.map(a => ({
      params: { slug: a.slug }
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
    const { data: actor } = await ActorService.getBySlug(String(params?.slug))
    const { data: movies } = await MovieService.getByActor(actor._id)

    return {
      props: { movies, actor }
    }
  } catch (error) {
    console.log(errorCatch(error))
    return {
      notFound: true
    }

  }
}

export default ActorPage