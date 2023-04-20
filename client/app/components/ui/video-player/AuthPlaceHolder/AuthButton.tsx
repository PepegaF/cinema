import React from 'react'
import { FC } from 'react';
import styles from './AuthPlaceHolder.module.scss'
import Link from 'next/link';
import { getMovieUrl } from '@/configs/url.config';

const AuthButton: FC<{ slug: string }> = ({ slug }) => {
  return (
    <Link href={`/auth/redirect/${getMovieUrl(slug)}`} className={styles.btn}>
      Sign in
    </Link>
  )
}

export default AuthButton