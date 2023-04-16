import { FC } from 'react'
import Meta from './../../../utils/meta/Meta';
import Heading from '@/components/ui/heading/Heading';
import { IHome } from './home.interface';
import Slider from '@/components/ui/slider/Slider';
import SubHeading from '@/components/ui/heading/SubHeading';

const Home: FC<IHome> = ({ slides, actors, trendingMovies }) => {
  return (
    <Meta
      title="Watch movies online"
      description="Watch MovieApp movies and TV shows online or stream right to your browser."
    >
      <Heading
        title="Watch movies online"
        className="text-gray-300 mb-8 text-xl"
      />

      {slides.length && <Slider slides={slides} />}

      <div className='my-10'>
        <SubHeading title='Best actors' />
      </div>
    </Meta>
  )
}

export default Home