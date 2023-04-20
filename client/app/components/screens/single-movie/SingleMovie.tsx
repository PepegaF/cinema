import React, { FC } from 'react'
import { IMoviePage } from '../../../../pages/movie/[slug]'
import Meta from '@/utils/meta/Meta'
import Banner from '@/components/ui/banner/Banner'
import SubHeading from '@/components/ui/heading/SubHeading'
import Gallery from '@/components/ui/gallery/Gallery'
import Content from './Content/Content'
import dynamic from 'next/dynamic'
import RateMovie from './RateMovie/RateMovie'
import { useUpdateCountOpened } from './RateMovie/useUpdateCountOpened'

const DynamicPlayer = dynamic(() => import('@/components/ui/video-player/VideoPlayer'), {
  ssr: false
})
const DynamicRating = dynamic(() => import('./RateMovie/RateMovie'), {
  ssr: false
})


const SingleMovie: FC<IMoviePage> = ({ movie, similarMovies }) => {
  useUpdateCountOpened(movie.slug)
  return (
    <Meta title={movie.title} description={`Watch ${movie.title}`} >
      <Banner image={movie.bigPoster} Detail={() => <Content movie={movie} />} />

      <DynamicPlayer slug={movie.slug} videoSource={movie.videoUrl} />

      <div className='mt-12'>
        <SubHeading title='Similar' />
        <Gallery items={similarMovies} />
      </div>
      <DynamicRating id={movie._id} slug={movie.slug} />
    </Meta>
  )
}

export default SingleMovie