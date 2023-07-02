import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import pink from '../../assets/images/pink.png';
import black from '../../assets/images/black.png';
import gray from '../../assets/images/gray.png';

const Slider = () => {
  const images = [black, gray, pink];

  return (
    <Slide>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[0]})` }}>
          <span>Slide 1</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[1]})` }}>
          <span>Slide 2</span>
        </div>
      </div>
      <div className="each-slide-effect">
        <div style={{ backgroundImage: `url(${images[2]})` }}>
          <span>Slide 3</span>
        </div>
      </div>
    </Slide>
  );
};
export default Slider;
