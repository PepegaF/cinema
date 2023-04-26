import { FC, MouseEvent } from 'react'

import { MaterialIcon } from '@/components/ui/icons/MaterialIcon'
import { useAppDispatch } from '@/hooks/storeHooks'
import { logout } from '@/store/user/user.actions'


const LogoutButton: FC = () => {
  const dispatch = useAppDispatch()

  const logoutHandler = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    dispatch(logout())
  }

  return (
    <li>
      <a onClick={logoutHandler}>
        {/* <MaterialIcon name="MdLogout" /> */}
        <span>Logout</span>
      </a>
    </li>
  )
}

export default LogoutButton
