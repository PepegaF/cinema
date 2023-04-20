import { MovieService } from "@/services/movie/movie.service"
import { toastError } from "@/utils/api/withToastrErrorRedux"
import { useMutation } from "react-query"
import { toastr } from "react-redux-toastr"
import { useEffect } from 'react';


export const useUpdateCountOpened = (slug: string) => {


  const { mutateAsync } = useMutation('update count opened', () => MovieService.updateCountOpened(slug))

  useEffect(() => {
    mutateAsync()
  }, [])

}