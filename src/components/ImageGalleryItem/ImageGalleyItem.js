import { Component } from 'react';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';
import styleImageGalleryItem from './imageGalleryItem.module.css';
import PropTypes from "prop-types";

export default class ImageGalleryItem extends Component {
  onClick = (largeImageURL) => {
    const instance = basicLightbox.create(`<img src=${largeImageURL} alt="" />`);
    instance.show();
    document.onkeydown = function(evt) {
      evt = evt || window.event;
      let isEscape = false;
      if ( "key" in evt ) {
        isEscape = ( evt.key === "Escape" || evt.key === "Esc" );
      } else {
        isEscape = ( evt.keyCode === 27 );
      }
      if ( isEscape ) {
        instance.close();
      }
    };
  };

  render() {
    return this.props.items.map(({ id, webformatURL, largeImageURL }) => (
      <li key={id} className={styleImageGalleryItem.imageGalleryItem} onClick={() => this.onClick(largeImageURL) }>
        <img src={webformatURL} alt=""  className={styleImageGalleryItem.imageGalleryItem_image}/>
      </li>
    ));
  }
}

ImageGalleryItem.propTypes = {
  items: PropTypes.array
};
