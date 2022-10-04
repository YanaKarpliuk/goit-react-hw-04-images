import React, { Component } from 'react';
import axios from 'axios';
import styleApp from './app.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader'

axios.defaults.baseURL = `https://pixabay.com/api/`;

export default class App extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    page: 1,
    query: '',
    items: [],
    currentLargeImageURL: '',
    error: '',
    isLoading: false,
    total: null,
  };

  onSubmit = query => {
    this.setState(
      {
        query,
        page: 1,
        items: [],
      },
      () => this.loadImages()
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.loadImages();
    }
  }

  loadImages = () => {
    this.setState({ isLoading: true });
    axios
      .get('', {
        params: {
          q: this.state.query,
          page: this.state.page,
          key: '30253708-47d627da2430a20cd80650fc3',
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      })
      .then(response => {
        this.setState(prev => ({
          total: response.data.total,
          items: [...prev.items, ...response.data.hits],
          error: '',
        }));
      })
      .catch(error =>
        this.setState({ error: 'Error while loading data. Try again later' })
      )
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  onLoadMoreButton = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };

  render() {
    return (
      <div className={styleApp.App}>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery items={this.state.items} />
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <Button
            onClick={this.onLoadMoreButton}
            items={this.state.items}
            total={this.state.total}
          />
        )}
      </div>
    );
  }
}
