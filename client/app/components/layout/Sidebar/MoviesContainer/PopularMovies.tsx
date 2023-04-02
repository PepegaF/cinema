import SkeletonLoader from 'components/ui/SkeletonLoader';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { MovieService } from 'services/movie/movie.service';
import MoviesList from './MoviesList';
const PopularMovies: FC = () => {
  const { isLoading, data } = useQuery('Popular movies in slider', () => MovieService.getMostPopularMovies())
  return (
    <>
      {isLoading ? <div className='mt-11'>
        <SkeletonLoader count={3} className='h-28 mb-4' />
      </div>
        : <MoviesList title='Popular Movies' link='/trending' movies={data || []} />
      }
    </>
  )
}

export default PopularMovies