import React, { Component, useState } from 'react';
import axios from 'axios';
import styleApp from './app.module.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

axios.defaults.baseURL = `https://pixabay.com/api/`;

export default function App() {
  const [imgData, setImgData] = useState({
    page: 1,
    query: '',
    items: [],
    currentLargeImageURL: '',
    error: '',
    isLoading: false,
    total: null,
  });

  const onSubmit = query => {
    setImgData(prev => {
      return {
        ...prev,
        query,
        page: 1,
        items: [],
      };
    });

    loadImages(query, 1);
  };

  const loadImages = (query, page) => {
    setImgData(prev => {
      return {
        ...prev,
        isLoading: true,
      };
    });
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
        setImgData(prev => ({
          ...prev,
          total: response.data.total,
          items: [...prev.items, ...response.data.hits],
          error: '',
        }));
      })
      .catch(error =>
        setImgData({ error: 'Error while loading data. Try again later' })
      )
      .finally(() => {
        setImgData(prev => {
          return {
            ...prev,
            isLoading: false,
          };
        });
      });
  };

  const onLoadMoreButton = () => {
    loadImages(imgData.query, imgData.page + 1);
    setImgData(prev => {
      return { ...prev, page: prev.page + 1 };
    });
  };

  return (
    <div className={styleApp.App}>
      <Searchbar onSubmit={onSubmit} />
      <ImageGallery items={imgData.items} />
      {imgData.isLoading ? (
        <Loader />
      ) : (
        <Button
          onClick={onLoadMoreButton}
          items={imgData.items}
          total={imgData.total}
        />
      )}
    </div>
  );
}
