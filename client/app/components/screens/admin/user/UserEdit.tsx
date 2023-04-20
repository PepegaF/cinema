import { useUserEdit } from './useUserEdit'
import { FC } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import SkeletonLoader from '@/components/ui/skeleton-loader/SkeletonLoader'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'
import { IUserEditInput } from './user-edit.interface'
import AuthFields from '@/components/shared/user/AuthFields'



const UserEdit: FC = () => {
  const { handleSubmit, register, formState, control, setValue } = useForm<IUserEditInput>({
    mode: 'onChange',
  })

  const { isLoading, onSubmit } = useUserEdit(setValue)

  return (
    <Meta title="Edit user">
      <AdminNavigation />
      <Heading title="Edit user" />
      <form onSubmit={handleSubmit(onSubmit)} className='admin-form'>
        {isLoading
          ? <SkeletonLoader count={3} />
          : (<>
            <AuthFields register={register} formState={formState} isPasswordRequired={false} />
            <Controller control={control} name='isAdmin' render={({ field }) =>
              <button className='text-link block mb-7 ' onClick={(e) => {
                e.preventDefault()
                field.onChange(!field.value)
              }}>
                {field.value ? 'Make it regular user' : 'Make it admin'}
              </button>} />
            <Button>Update</Button>
          </>
          )}
      </form>
    </Meta>
  )
}

export default UserEdit
