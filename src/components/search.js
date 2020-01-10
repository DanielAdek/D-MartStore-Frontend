import React from 'react';
import { Alias } from '../importer'
import * as RC from '../assets/styles/search';

const { Alert } = Alias.pathToUtils('helpers');

export const Search =  () => {

  //React Hooks
  // const [searchInput, setSearchInput] = useState(null);

  // const handleChange = event => setSearchInput(event.target.value);

  const handleSearch = event => {
    if (event.key === 'Enter') {
      Alert.info('Sorry, This feature is under construction!')
    }
  }

  const handleSearchByClick = () => Alert.info('Sorry, This feature is under construction!');

  return (
    <RC.SearchBox>
      <RC.SearchInput 
        type="search"
        placeholder="Search over 10,000 products"
        aria-label="Site search"
        autocomplete="on"
        onKeyUp={handleSearch}
        // onChange={handleChange}
        />
      <RC.SearchButton onClick={handleSearchByClick}>
      <RC.SearchIcon>
        <RC.SearchIconTitle>Search</RC.SearchIconTitle>
        <RC.SearchIconPath d={RC.encoded}></RC.SearchIconPath>
      </RC.SearchIcon>
      </RC.SearchButton>
    </RC.SearchBox>
  )
}