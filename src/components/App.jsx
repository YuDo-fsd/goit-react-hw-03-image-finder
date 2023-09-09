import { Component } from 'react';
import SearchBar from './Searchbar/SearchBar';
import { CompApp } from './App.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoadMoreButton from './Button/Button';

export class App extends Component {
  render() {
    return (
      <CompApp>
        <SearchBar></SearchBar>
        <ImageGallery>
          <ImageGalleryItem></ImageGalleryItem>
        </ImageGallery>
        <LoadMoreButton></LoadMoreButton>
      </CompApp>
    );
  }
}
