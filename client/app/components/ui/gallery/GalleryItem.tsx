import React, { FC } from 'react'
import { IGalleryItemProps } from './gallery.interface'
import Link from 'next/link'
import styles from './Gallery.module.scss'
import Image from 'next/image'

const GalleryItem: FC<IGalleryItemProps> = ({ item, variant }) => {

  return (
    <Link href={item.link} className={`${styles.item} ${item.content ? styles.withText : ''} ${variant === 'vertical' ? styles.vertical : styles.horizontal}`}>
      <Image alt={item.name} src={item.posterPath} fill draggable={false} priority />
      {item.content && (
        <div className={styles.content}>
          <div className={styles.title}>{item.content.title}</div>
          {item.content.subTitle && (
            <div className={styles.subTitle}>{item.content.subTitle}</div>
          )}
        </div>
      )}
    </Link>
  )
}

export default GalleryItem