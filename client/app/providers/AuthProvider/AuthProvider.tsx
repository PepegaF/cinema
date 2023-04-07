import React from 'react'
import { FC } from 'react';
import { TypeComponentAuthFields } from 'shared/types/auth.types';
import { useAppDispatch, useAppSelector } from 'hooks/storeHooks';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { checkAuth, logout } from 'store/user/userActions';
import dynamic from 'next/dynamic';

const AuthProvider: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
  const dispatch = useAppDispatch()
  const { user } = useAppSelector((state) => state.user)
  const { pathname } = useRouter()
  const DynamicCheckRoll = dynamic(() => import('./CheckRole'), { ssr: false })

  useEffect(() => {
    const accessToken = Cookies.get('accessToken')
    if (accessToken) dispatch(checkAuth())
  }, [])
  useEffect(() => {
    const refreshToken = Cookies.get('refreshToken')
    if (!refreshToken && user) dispatch(logout())
  }, [pathname])

  return !isOnlyAdmin && !isOnlyUser ? <>{children}</> : <DynamicCheckRoll Component={{ isOnlyAdmin, isOnlyUser }}> {children}</DynamicCheckRoll>
}

export default AuthProvider