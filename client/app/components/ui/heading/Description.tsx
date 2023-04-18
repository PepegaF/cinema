import React from 'react'
import { FC } from 'react';
import parse from 'html-react-parser'


const Description: FC<{ text: string, className?: string }> = ({ text, className = '' }) => {
  return (
    <div className={`${className} ${'text-lg font-light text-white text-opacity-60  '}`} >
      {parse(text)}
    </div>
  )
}

export default Description