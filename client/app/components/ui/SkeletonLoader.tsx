import React from 'react'
import { FC } from 'react';
import Skeleton, { SkeletonProps } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonLoader: FC<SkeletonProps> = ({ className, ...rest }) => {
  return (
    <Skeleton {...rest} baseColor='#1F2125' highlightColor='#292A2E' className={`${className} 'rounded-lg'`}></Skeleton>
  )
}

export default SkeletonLoader