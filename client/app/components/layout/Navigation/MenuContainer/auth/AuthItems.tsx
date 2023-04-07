import { FC } from 'react';
import MenuItem from '../MenuItem';
import LogoutButton from './LogoutButton';
import { getAdminHomeUrl } from 'config/url.config';
import { useAppSelector } from 'hooks/storeHooks';
import { useLoaded } from 'hooks/useLoaded';

const AuthItems: FC = () => {
  const { user } = useAppSelector((state) => state.user)
  const loaded = useLoaded()
  return (
    <>
      {user && loaded
        ? <>
          <MenuItem item={{ icon: 'MdSettings', link: '/ProfilePage', title: 'Profile', }} />
          <LogoutButton />
        </>
        : <MenuItem item={{ icon: 'MdLogin', link: '/auth', title: 'Login' }} />
      }

      {user?.isAdmin && <MenuItem item={{ icon: 'MdOutlineLock', link: getAdminHomeUrl(), title: 'Admin panel', }} />}
    </>
  )
}

export default AuthItems