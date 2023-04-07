import { useAppSelector } from 'hooks/storeHooks'
import { Elsie } from 'next/font/google'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { TypeComponentAuthFields } from 'shared/types/auth.types'

const CheckRole: FC<TypeComponentAuthFields> = ({ children, Component: { isOnlyAdmin, isOnlyUser } }) => {
  const { user } = useAppSelector((state) => state.user)
  const router = useRouter()
  const Children = () => <>{children}</>

  if (user?.isAdmin) return <Children />
  if (isOnlyAdmin) {
    router.pathname !== '/404' && router.replace('/404')
    return null
  }
  const isUser = user && !user.isAdmin
  if (isUser && isOnlyUser) return <Children />
  else {
    router.pathname !== '/auth' && router.replace('/auth')
    return null
  }
}

export default CheckRole