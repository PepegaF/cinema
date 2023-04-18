import React, { FC } from 'react'
import { MaterialIcon } from '../../icons/MaterialIcon'
import styles from './SlideArrow.module.scss'
import cn from 'classnames';

interface ISlideArrow {
  variant: 'left' | 'rigth'
  clickHandler: () => void
}


const SlideArrow: FC<ISlideArrow> = ({ variant, clickHandler }) => {
  const isLeft = variant === 'left'
  return (
    <button onClick={clickHandler} className={cn(styles.arrow, {
      [styles.left]: isLeft,
      [styles.right]: !isLeft,
    })}>
      <MaterialIcon name={isLeft ? 'MdChevronLeft' : 'MdChevronRight'} />
    </button>
  )
}

export default SlideArrow