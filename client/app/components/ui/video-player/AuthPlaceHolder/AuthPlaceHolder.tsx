import React from 'react'
import { FC } from 'react';
import styles from './AuthPlaceHolder.module.scss'
import AuthButton from './AuthButton';

const AuthPlaceHolder: FC<{ slug: string }> = ({ slug }) => {
  return (
    <div className={styles.placeholder}>
      <div>
        <div>You must be logged in to start watching</div>
        <AuthButton slug={slug} />
      </div>
    </div>
  )
}

export default AuthPlaceHolder