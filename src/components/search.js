import React from 'react';
import * as RC from '../assets/styles/search';

export default () => {
  return (
    <RC.SearchBox>
      <RC.SearchInput name="search" placeholder="Search over 10,000 products" aria-label="Site search" autocomplete="on" />
      <RC.SearchButton>
      <RC.SearchIcon>
        <RC.SearchIconTitle>Search</RC.SearchIconTitle>
        <RC.SearchIconPath d={RC.encoded}></RC.SearchIconPath>
      </RC.SearchIcon>
      </RC.SearchButton>
    </RC.SearchBox>
  )
}