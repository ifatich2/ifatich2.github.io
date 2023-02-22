import React, { useState, useEffect } from 'react';
import Button from '../../atoms/Button';
import Carousel from 'react-bootstrap/Carousel';

function limitWords(str, limit) {
  const words = str.split(" ");
  return words.slice(0, limit).join(" ");
}

function BasicCarousel({slides, buttonValue}) {
  const [descLimit, setDescLimit] = useState(40);

  useEffect(() => {
    function handleResize() {
      const newDescLimit = window.innerWidth < 769 ? 30 : 40;
      setDescLimit(newDescLimit);
    }

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Carousel>
      {slides && slides.map((slide, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={slide.imgSrc}
            alt={`Slide ${index + 1}`}
          />
          <Carousel.Caption>
            <Button className="mb-3" ripple="dark">{ buttonValue }</Button>
            <h2 className='mb-2'>{slide.CarouselHead}</h2>
            <p className='mb-0'>{limitWords(slide.CarouselDesc, descLimit)} {slide.CarouselDesc.length > descLimit && '...'}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

BasicCarousel.defaultProps = {
  buttonValue : "Aspirasi",
  slides: [
    { imgSrc: 'https://reactjs.org/logo-og.png', CarouselHead: "Modal Header 1", CarouselDesc: "Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ...Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak ..." },
    { imgSrc: 'https://reactjs.org/logo-og.png', CarouselHead: "Modal Header 2", CarouselDesc: "Kasih sayang Ibu sepanjang masa, kasih sayang anak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun takanak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak anak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun takanak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun takanak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun takanak sepanjang galah Meski kasih sayang Ibu tak mungkin dibalas lunas, namun tak" },
    { imgSrc: 'https://reactjs.org/logo-og.png', CarouselHead: "Modal Header 3", CarouselDesc: "Modal Title Test" },
    { imgSrc: 'https://reactjs.org/logo-og.png', CarouselHead: "Modal Header 4", CarouselDesc: "Modal Title Test" },
  ]
}

export default BasicCarousel;
