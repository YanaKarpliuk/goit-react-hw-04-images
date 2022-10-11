import ImageGalleryItem from '../ImageGalleryItem/ImageGalleyItem';
import styleImageGallery from './imageGallery.module.css';
import PropTypes from 'prop-types';
export default function ImageGallery(props) {
  return (
    <ul className={styleImageGallery.imageGallery}>
      <ImageGalleryItem items={props.items} />
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.array,
};
