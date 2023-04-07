import MaterialIcon from 'components/ui/MaterialIcon';
import { useAppDispatch } from 'hooks/storeHooks';
import { FC, MouseEvent } from 'react';
import { logout } from 'store/user/userActions';

const LogoutButton: FC = () => {
  const dispath = useAppDispatch()

  const handleLogout = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    dispath(logout())
  }
  return (
    <li>
      <a onClick={handleLogout}>
        <MaterialIcon name='MdLogout' />
        <span>Logout</span>
      </a>
    </li>
  )
}

export default LogoutButton