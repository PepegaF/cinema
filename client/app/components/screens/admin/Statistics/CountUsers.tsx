import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { AdminService } from 'services/admin/admin.service'
import styles from '../Admin.module.scss'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

const CountUsers: FC = () => {
  const { isLoading, data } = useQuery('Count Users', () => AdminService.getCountUsers())
  return (
    <div className={`${styles.block}${styles.countUsers}`}>
      <div>{isLoading ? <SkeletonLoader /> : <div className={styles.number}>{data?.data}</div>}</div>
      <div className={styles.description}>users</div>
    </div>
  )
}

export default CountUsers