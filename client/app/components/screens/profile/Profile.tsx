import React from 'react'
import { FC } from 'react';
import styles from './Profile.module.scss'
import { useForm } from 'react-hook-form';
import { IProfileInput } from './profile.interface';
import { userProfile } from './useProfile';
import Button from '@/components/ui/form-elements/Button';
import Meta from '@/utils/meta/Meta';
import Heading from '@/components/ui/heading/Heading';
import AuthFields from '@/components/shared/user/AuthFields';
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader';

const Profile: FC = () => {
  const { handleSubmit, register, formState, setValue } = useForm<IProfileInput>({ mode: 'onChange' })
  const { isLoading, onSubmit } = userProfile(setValue)

  return (
    <Meta title="Profile">
      <Heading title="Profile" className="mb-6" />
      <form onSubmit={handleSubmit(onSubmit)} className={styles.from}>
        {isLoading
          ? <SkeletonLoader count={2} />
          : <AuthFields register={register} formState={formState} />
        }
        <Button>Update</Button>
      </form>
    </Meta>
  )
}

export default Profile