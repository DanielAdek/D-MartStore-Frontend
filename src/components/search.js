import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Alias } from '../importer'
import * as RC from '../assets/styles/search';

// const { Alert } = Alias.pathToUtils('helpers');
const { retreiveProductsBySearch } = Alias.pathToActions('ProductCRUD');

export const Search =  () => {
	// Redux Hooks
	const history = useHistory();
  const dispatch = useDispatch();
  
  //React Hooks
  const [searchInput, setSearchInput] = useState(null);

  const handleChange = event => setSearchInput(event.target.value);

  const handleSearch = event => {
    if (event.key === 'Enter') {
      dispatch(retreiveProductsBySearch(searchInput));
      history.push('/shop');
    }
  }

  const handleSearchByClick = () => {
    dispatch(retreiveProductsBySearch(searchInput));
    history.push('/shop');
  }

  return (
    <RC.SearchBox>
      <RC.SearchInput 
        type="search"
        placeholder="Search over 10,000 products"
        aria-label="Site search"
        autocomplete="on"
        onKeyUp={handleSearch}
        onChange={handleChange}
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