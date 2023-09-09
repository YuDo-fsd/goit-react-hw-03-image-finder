import { Component } from 'react';
import SearchBar from './Searchbar/SearchBar';
import { CompApp } from './App.styled';
import ImageGallery from './ImageGallery/ImageGallery';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import LoadMoreButton from './Button/Button';
// import ModalWindow from './Modal/Modal';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({
      query: evt.target.elements.query.value,
      images: [],
      page: 1,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      //HTTP Request
    }
  }

  render() {
    const { images } = this.state;

    return (
      <CompApp>
        <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        <ImageGallery>{images.length > 0 && <ImageGalleryItem />}</ImageGallery>
        <LoadMoreButton onSubmit={this.handleLoadMore}></LoadMoreButton>
        {/* <ModalWindow /> */}
      </CompApp>
    );
  }
}
