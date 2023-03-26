import { FC } from 'react';
import Menu from './Menu';
import styles from './MenuContainer.module.scss'
import { firstMenu, userMenu } from './menu.data';
import GenreMenu from './genres/GenreMenu';

const MenuContainer: FC = () => {
  return (
    <div>
      <Menu menu={firstMenu} />
      <GenreMenu />
      <Menu menu={userMenu} />
    </div>
  )
}

export default MenuContainer