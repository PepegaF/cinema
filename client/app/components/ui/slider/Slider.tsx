import React, { FC } from 'react'
import { ISlide } from './slider.interface'
import { useSlider } from './useSlider'
import SlideArrow from './SlideArrow/SlideArrow'
import SlideItem from './SlideItem'
import { CSSTransition } from 'react-transition-group'
import styles from './Slider.module.scss'

interface ISlider {
  slides: ISlide[]
  buttonTitle?: string
}

const Slider: FC<ISlider> = ({ slides, buttonTitle }) => {

  const { slideIn, index, isNext, isPrev, handleArrowClick } = useSlider(slides.length)

  return (
    <div className={styles.slider}>
      <CSSTransition in={slideIn} classNames='slide-animation' timeout={400} unmountOnExit>
        <SlideItem slide={slides[index]} buttonTitle={buttonTitle} />
      </CSSTransition>


      {isPrev && <SlideArrow clickHandler={() => handleArrowClick('prev')} variant='left' />}
      {isNext && <SlideArrow clickHandler={() => handleArrowClick('next')} variant='rigth' />}
    </div>
  )
}

export default Slider