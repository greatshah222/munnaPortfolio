import React from 'react';
import classes from './Gallery.module.css';
import image2 from '../Assets/Gallery/2.jpg';
import image3 from '../Assets/Gallery/3.jpg';
import image4 from '../Assets/Gallery/4.jpg';
import image5 from '../Assets/Gallery/5.jpg';
import image6 from '../Assets/Gallery/6.jpg';
import image7 from '../Assets/Gallery/7.jpg';

function Gallery() {
  return (
    <div className={classes.gallerySection}>
      <h2>Our Gallery</h2>
      <div className={classes.row}>
        <div className={classes.galleryContainer}>
          <img src={image2} className={classes.imgGallery} alt='child' />
          <img src={image3} className={classes.imgGallery} alt='child' />
          <img src={image4} className={classes.imgGallery} alt='child' />
          <img src={image5} className={classes.imgGallery} alt='child' />
          <img src={image6} className={classes.imgGallery} alt='child' />
          <img src={image7} className={classes.imgGallery} alt='child' />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
