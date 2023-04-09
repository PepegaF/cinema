import React, { FC } from 'react'
import styles from './Admin.module.scss'
import Meta from 'utils/meta/Meta'
import AdminNavigation from 'components/ui/admin-navigation/AdminNavigation';
import Statistics from './Statistics/Statistics';
import Heading from '@/components/ui/heading/Heading';

const Admin: FC = () => {
  return (
    <Meta title='Admin panel'>
      <AdminNavigation />
      <Heading title='Statistics' />
      <Statistics />
    </Meta>
  )
}

export default Admin