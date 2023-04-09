import { FC } from 'react'
import Meta from './../../../utils/meta/Meta';
import Heading from '@/components/ui/heading/Heading';

const Home: FC = () => {
  return (
    <Meta
      title="Watch movies online"
      description="Watch MovieApp movies and TV shows online or stream right to your browser."
    >
      <Heading
        title="Watch movies online"
        className="text-gray-300 mb-8 text-xl"
      />

      <h1>Home123</h1>
    </Meta>
  )
}

export default Home