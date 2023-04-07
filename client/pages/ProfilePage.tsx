import Admin from 'components/screens/admin/Admin'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const ProfilePage: NextPageAuth = () => {
  return (
    <Admin />
  )
}

ProfilePage.isOnlyUser

export default ProfilePage