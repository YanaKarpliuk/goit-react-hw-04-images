import React, { Component, useState } from 'react';
import axios from 'axios';
import styleApp from './app.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export default function App() {
  // const [imgData, setImgData] = useState({
  //   page: 1,
  //   query: '',
  //   items: [],
  //   currentLargeImageURL: '',
  //   error: '',
  //   isLoading: false,
  //   total: null,
  // });

  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [items, setItems] = useState([]);
  const [currentLargeImageURL, setCurrentLargeImageURL] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(null);

  const onSubmit = query => {
    setQuery(query);
    setPage(1);
    setItems([]);

    loadImages(query, 1);
  };

  const loadImages = (query, page) => {
    setIsLoading(true);
    axios
      .get('', {
        params: {
          q: query,
          page: page,
          key: '30253708-47d627da2430a20cd80650fc3',
          image_type: 'photo',
          orientation: 'horizontal',
          per_page: 12,
        },
      })
      .then(response => {
        setTotal(response.data.total);
        setItems(prev => [...prev, ...response.data.hits]);
        setError('');
      })
      .catch(error => setError('Error while loading data. Try again later'))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const onLoadMoreButton = () => {
    loadImages(query, page + 1);
    setPage(prev => prev + 1);
  };

  return (
    <div className={styleApp.App}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery items={items} />
      {isLoading ? (
        <Loader />
      ) : (
        <Button onClick={onLoadMoreButton} items={items} total={total} />
      )}
    </div>
  );
}
