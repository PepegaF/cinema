import React, { FC } from 'react'
import { useQuery } from 'react-query'
import { AdminService } from 'services/admin/admin.service'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'
import styles from '../Admin.module.scss'

const CountUsers: FC = () => {
  const { isLoading, data } = useQuery('Count Users', () => AdminService.getCountUsers())
  return (
    <div className={`${styles.block} ${styles.countUsers}`}>
      <div>{isLoading ? <SkeletonLoader /> : <div className={styles.number}>{data?.data}</div>}</div>
      <div className={styles.description}>users</div>
    </div>
  )
}

export default CountUsers