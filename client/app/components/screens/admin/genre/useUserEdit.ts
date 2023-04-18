import { IUserEditInput } from './genre-edit.interface'
import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { getKeys } from '@/utils/object/getKeys'

import { getAdminUrl } from '@/configs/url.config'

export const useGenreEdit = (setValue: UseFormSetValue<IUserEditInput>) => {
  const { query, push } = useRouter()

  const userId = String(query.id)

  const { isLoading } = useQuery(['user', userId], () => GenreService.getById(userId),
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

  const { mutateAsync } = useMutation('update user', (data: IUserEditInput) => GenreService.update(userId, data),
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
