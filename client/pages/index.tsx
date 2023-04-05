import { Inter } from 'next/font/google'
import styles from '../app/assets/styles/Home.module.scss'
import { NextPage } from 'next'
import Home from 'components/screens/Home/Home'
const inter = Inter({ subsets: ['latin'] })

const HomePage: NextPage = () => {
  return (
    <Home />
  )
}
export default HomePage
