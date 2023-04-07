import React, { FC } from 'react'
import styles from './Admin.module.scss'
import Meta from 'utils/meta/Meta'
import Heading from './../../heading/Heading';
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation';

const Admin: FC = () => {
  return (
    <Meta title='Admin panel'>
      <AdminNavigation />
      <Heading title='Statistics' />
    </Meta>
  )
}

export default Admin