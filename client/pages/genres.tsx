import { GetStaticProps, NextPage } from 'next'

import Collections from '@/screens/collections/Collections'

import { GenreService } from '@/services/genre.service'
import { ICollection } from '@/components/screens/collections/collections.types';

const GenresPage: NextPage<{ collections: ICollection[] }> = ({ collections, }) => {
  return <Collections collections={collections || []} />
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data: collections } = await GenreService.getCollections()
    console.log(collections);

    return {
      props: { collections },
    }
  } catch (e) {
    // console.log(errorCatch(e))

    return {
      props: {},
      // notFound: true,
    }
  }
}

export default GenresPage
