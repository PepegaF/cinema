import { ChangeEvent, FC } from 'react'


import styles from './SearchField.module.scss'
import MaterialIcon from '../MaterialIcon'

interface ISearchField {
  searchItem: string
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchField: FC<ISearchField> = ({ handleSearch, searchItem }) => {
  return (
    <div className={styles.search}>
      <MaterialIcon name="MdSearch" />
      <input placeholder="Search" value={searchItem} onChange={handleSearch} />
    </div>
  )
}

export default SearchField
