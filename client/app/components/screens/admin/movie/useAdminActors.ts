import { useQuery } from 'react-query'


import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/api/withToastrErrorRedux'
import { IOption } from '@/components/ui/select/select.interface'

export const useAdminActors = () => {
  const queryData = useQuery('list of actor', () => ActorService.getAll(), {
    select: ({ data }) =>
      data.map(
        (actor): IOption => ({
          label: actor.name,
          value: actor._id,
        })
      ),
    onError(error) {
      toastError(error, 'actor list')
    },
  })

  return queryData
}