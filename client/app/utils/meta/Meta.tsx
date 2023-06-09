import React from 'react'
import { ISeo } from './meta.interface';
import { FC } from 'react';
import { useRouter } from 'next/router';
import logoImage from '../../assets/images/logo.svg';
import { onlyText } from './../string/clearText';
import Head from 'next/head';
import { siteName, titleMerge } from '@/configs/seo.config';

const Meta: FC<ISeo> = ({ title, description, image, children }) => {
  const { asPath } = useRouter()
  const currentUrl = `http://localhost:3000${asPath}`

  return (
    <>
      <Head>
        <title itemProp='headline'>{title}</title>
        {description
          ? <>
            <meta
              itemProp='description'
              name='description'
              content={onlyText(description, 152)}
            />
            <link rel='canonical' href={currentUrl} />
            <meta property='og:locale' content='en' />
            <meta property='og:title' content={titleMerge(title)} />
            <meta property='og:url' content={currentUrl} />
            <meta property='og:image' content={image || logoImage} />
            <meta property='og:site_name' content={siteName} />
            <meta
              property='og:description'
              content={onlyText(description, 197)}
            />
          </>
          : <meta name='robots' content='noindex,nofollow' />
        }
      </Head>
      {children}
    </>
  )
}

export default Meta