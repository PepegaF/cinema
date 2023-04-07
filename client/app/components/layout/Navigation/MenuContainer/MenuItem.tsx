import { useRouter } from 'next/router';
import styles from './Menu.module.scss'
import { FC } from 'react';
import { IMenuItem } from './menu.interface';
import Link from 'next/link';
import MaterialIcon from 'components/ui/MaterialIcon';
import { useLoaded } from 'hooks/useLoaded';

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
  const { asPath } = useRouter()
  const loaded = useLoaded()
  return (
    <>
      {loaded && <li className={asPath === item.link ? 'active' : ''}>
        <Link href={item.link}>
          <MaterialIcon name={item.icon} />
          <span>{item.title}</span>
        </Link>
      </li>}
    </>
  )
}

export default MenuItem