import { Inter } from 'next/font/google'
import styles from '../app/assets/styles/Home.module.scss'
import { GetStaticProps, NextPage } from 'next'
import Home from 'components/screens/Home/Home'
import { IHome } from '@/components/screens/Home/home.interface'
import { MovieService } from '@/services/movie/movie.service'
import { ISlide } from '@/components/ui/slider/slider.interface'
import { getActorUrl, getMovieUrl } from '@/configs/url.config'
import { getGenresList } from '@/utils/movie/getGenresList'
import { errorCatch } from 'api/api.helpers'
import { IGalleryItem } from '@/components/ui/gallery/gallery.interface'
import { ActorService } from '@/services/actor.service'
const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage<IHome> = ({ slides, trendingMovies, actors }) => {
  return (
    <Home slides={slides} actors={actors} trendingMovies={trendingMovies} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: movies } = await MovieService.getMovies()
    const { data: dataActors } = await ActorService.getAll()
    const dataTrendingMovies = await MovieService.getMostPopularMovies()

    const slides: ISlide[] = movies.slice(0, 3).map((m) => ({
      _id: m._id,
      link: getMovieUrl(m.slug),
      subTitle: getGenresList(m.genres),
      title: m.title,
      bigPoster: m.bigPoster,
    }))

    const actors: IGalleryItem[] = dataActors.slice(0, 7).map(a => ({
      name: a.name,
      posterPath: a.photo,
      link: getActorUrl(a.slug),
      content: {
        title: a.name,
        subTitle: `+${a.countMovies} movies`
      }
    }))

    const trendingMovies: IGalleryItem[] = dataTrendingMovies.slice(0, 7).map(t => ({
      name: t.title,
      posterPath: t.poster,
      link: getMovieUrl(t.slug),
    }))
    return {
      props: { slides, actors, trendingMovies } as IHome,
    }
  } catch (error) {
    console.log(errorCatch(error))
    return {
      props: { slides: [], actors: [], trendingMovies: [] } as IHome,
    }

  }
}


export default HomePage
