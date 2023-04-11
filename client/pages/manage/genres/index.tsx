import GenreList from '@/components/screens/admin/genres/GenreList'
import React from 'react'
import { NextPageAuth } from 'shared/types/auth.types'

const GenreListPage: NextPageAuth = () => {
  return (
    <GenreList />
  )
}

GenreListPage.isOnlyAdmin

export default GenreListPage