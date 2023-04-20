import React, { FC } from 'react'
import styles from './RateMovie.module.scss'
import { useRateMovie } from './useRateMovie'
import { useAuth } from '@/hooks/useAuth'
import AuthButton from '@/components/ui/video-player/AuthPlaceHolder/AuthButton'
import StarRating from 'react-star-rating-component';

interface IRateMovie {
  id: string
  slug: string
}

const RateMovie: FC<IRateMovie> = ({ id, slug }) => {
  const { user } = useAuth()
  const { rating, isSended, handleClick } = useRateMovie(id)
  return (
    <div className={styles.wrapper}>
      <h3>How do you like the movie?</h3>
      <p>Ratings improve recommendations</p>
      {user
        ? <>{isSended
          ? <div className={styles.thanks}>Thenks for rating!</div>
          : <StarRating name='star-rating' onStarClick={handleClick} value={rating} emptyStarColor='#4f4f4f' />}</>
        : <AuthButton slug={slug} />}
    </div>
  )
}

export default RateMovie