import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleyItem';
import styleImageGallery from './imageGallery.module.css';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

export default class ImageGallery extends Component {
  render() {
    return (
      <ul className={styleImageGallery.imageGallery}>
        <ImageGalleryItem items={this.props.items}/>
      </ul>
    );
  }
}

ImageGallery.propTypes = {
  items: PropTypes.array,
};
