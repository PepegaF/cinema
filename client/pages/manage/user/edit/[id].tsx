import UserEdit from '@/components/screens/admin/genre/UserEdit'
import GenreEdit from '@/components/screens/admin/genre/UserEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const UserEditPage: NextPageAuth = () => {
  return <UserEdit />
}

UserEditPage.isOnlyAdmin = true

export default UserEditPage
