import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'

import { getAdminUrl } from '@/configs/url.config'
import { IUserEditInput } from './user-edit.interface'
import { UserService } from '@/services/user.service'

export const useUserEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
  const { query, push } = useRouter()

  const userId = String(query.id)

  const { isLoading } = useQuery(['user', userId], () => UserService.getById(userId),
    {
      onSuccess({ data }) {
        setValue('email', data.email)
        setValue('isAdmin', data.isAdmin)
      },
      onError(error) {
        toastError(error, 'Get user')
      },
      enabled: !!query.id,
    }
  )

  const { mutateAsync } = useMutation('update user', (data: IUserEditInput) => UserService.updateUser(userId, data),
    {
      onError(error) {
        toastError(error, 'Update user')
      },
      onSuccess() {
        toastr.success('Update user', 'update was successful')
        push(getAdminUrl('users'))
      },
    }
  )

  const onSubmit: SubmitHandler<IUserEditInput> = async (data) => {
    await mutateAsync(data)
  }

  return { onSubmit, isLoading }
}
