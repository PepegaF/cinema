import { Inter } from 'next/font/google'
import styles from '../app/assets/styles/Home.module.scss'
import { NextPage } from 'next'
import Home from 'components/screens/Home/Home'
import { NextPageAuth } from 'shared/types/auth.types'
const inter = Inter({ subsets: ['latin'] })

const AdminPage: NextPageAuth = () => {
  return (
    <Home />
  )
}

AdminPage.isOnlyUser

export default AdminPage
