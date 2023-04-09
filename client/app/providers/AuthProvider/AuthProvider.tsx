import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'
import { useAppDispatch } from '@/hooks/storeHooks'
import { checkAuth, logout } from '@/store/user/user.actions'
import { FC, useEffect } from 'react';
import Cookies from 'js-cookie'

const DynamicCheckRole = dynamic(() => import('./CheckRole'), { ssr: false })

const AuthProvider: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser }, }) => {
  const dispatch = useAppDispatch()
  const { user } = useAuth()
  const { pathname } = useRouter()

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) dispatch(checkAuth())
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) dispatch(logout())
  }, [pathname]) // eslint-disable-line react-hooks/exhaustive-deps

  return !isOnlyAdmin && !isOnlyUser ? (
    <>{children}</>
  ) : (
    <DynamicCheckRole Component={{ isOnlyAdmin, isOnlyUser }}>
      {children}
    </DynamicCheckRole>
  )
}

export default AuthProvider
