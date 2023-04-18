import GenreEdit from '@/components/screens/admin/genre/UserEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
  return <GenreEdit />
}

GenreEditPage.isOnlyAdmin = true

export default GenreEditPage
