import React from 'react'
import { FC } from 'react';
import styles from './Search.module.scss'
import { useSearch } from './UseSearch';
import SearchList from './SearchList/SearchList';
import SearchField from 'components/ui/search-field/SearchField';

const Search: FC = () => {
  const { isSuccess, data, handleSearch, searchItem } = useSearch()
  return (
    <div className={styles.wrapper}>
      <SearchField searchItem={searchItem} handleSearch={handleSearch} />
      {isSuccess && <SearchList movies={data || []} />}
    </div>
  )
}

export default Search