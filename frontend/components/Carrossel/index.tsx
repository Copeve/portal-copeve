import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import styles from './carrossel.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { before } from 'node:test';

interface CarrosselProps {

}



function SampleNextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        id={styles.nextArrow}
        style={{ ...style, display: "block", position:'absolute', top: '10vw', right: '4%',  zIndex: 1, color: 'white'}}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className }
        style={{ ...style, display: "block", position:'absolute', top: '10vw', left: '4%',  zIndex: 1, }}
        onClick={onClick}
      />
    );
  }
const Carrossel: React.FC<CarrosselProps> = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    
    const images = [
        '/images/banner.jpg',
        '/images/banner.jpg',
      ];
    return (
          <div >
              <Slider {...settings} >
                {images.map((imageUrl) => (
                  <div key={imageUrl}>
                    <img className={styles.carrosselImage} src={imageUrl} alt="Imagem" />
                  </div>
                ))}
              </Slider>
          </div>
    );
  };
export default Carrossel;

  