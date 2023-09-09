import { Component } from 'react';
import SearchBar from './Searchbar/SearchBar';
import { CompApp } from './App.styled';

export class App extends Component {
  render() {
    return (
      <CompApp>
        <SearchBar></SearchBar>
      </CompApp>
    );
  }
}
