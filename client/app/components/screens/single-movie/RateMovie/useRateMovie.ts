import { useAuth } from "@/hooks/useAuth"
import { RatingService } from "@/services/rating/rating.service"
import { toastError } from "@/utils/api/withToastrErrorRedux"
import { useState } from "react"
import { useMutation, useQuery } from "react-query"
import { toastr } from "react-redux-toastr"


export const useRateMovie = (movieId: string) => {
  const [rating, setRating] = useState(0)
  const [isSended, setIsSended] = useState(false)
  const { user } = useAuth()

  const { refetch } = useQuery(['your movie rating', movieId], () => RatingService.getByUserMovie(movieId),
    {
      onSuccess({ data }) {
        setRating(data)
      },
      onError(error) {
        toastError(error, 'Get rating')
      },
      enabled: !!movieId && !!user,
    },
  )

  const { mutateAsync } = useMutation('set rating movie', ({ value }: { value: number }) => RatingService.setRating(movieId, value),
    {
      onError(error) {
        toastError(error, 'Update Rating')
      },
      onSuccess() {
        toastr.success('Update your rating', 'You have successfully rated')
        setIsSended(true)
        refetch()
        setTimeout(() => {
          setIsSended(false)
        }, 2400);
      },
    }
  )

  const handleClick = async (nextValue: number) => {
    setRating(nextValue)
    await mutateAsync({ value: nextValue })
  }
  return { isSended, rating, handleClick }
}