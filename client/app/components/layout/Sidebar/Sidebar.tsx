import MoviesContainer from './MoviesContainer/MoviesContainer';
import Search from './Search/Search';
import styles from './Sidebar.module.scss'
import { FC } from 'react';

const Sidebar: FC = () => {
  const a = () => {
    console.log(1)
  }
  return (
    <div onScroll={() => a} className={styles.sidebar}>
      <Search />
      <MoviesContainer />
    </div>
  )
}

export default Sidebar