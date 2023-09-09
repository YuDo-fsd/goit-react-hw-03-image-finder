import React from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchButton,
  SearchButtonLabel,
  SerchBarInput,
} from './SearchBar.styled';

export default function SearchBar() {
  return (
    <SearchBarHeader>
      <SearchForm>
        <SearchButton type="submit">
          <SearchButtonLabel>Search</SearchButtonLabel>
        </SearchButton>

        <SerchBarInput
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchBarHeader>
  );
}
