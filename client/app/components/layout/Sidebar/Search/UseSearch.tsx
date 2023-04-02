import { useState, ChangeEvent } from 'react';
import { useQuery } from 'react-query';
import { MovieService } from './../../../../services/movie/movie.service';
import { useDebounce } from 'hooks/useDebounce';

export const useSearch = () => {
  const [searchItem, setSearchItem] = useState('')
  const debouncedSearch = useDebounce(searchItem, 500)

  const { isSuccess, data } = useQuery(['search movie list', debouncedSearch], () =>
    MovieService.getMovies(debouncedSearch),
    {
      select: ({ data }) => data,
      enabled: !!debouncedSearch
    })

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value)
  }

  return { isSuccess, data, handleSearch, searchItem }
}