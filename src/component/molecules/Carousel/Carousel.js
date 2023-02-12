import Button from '../../atoms/Button';
import Carousel from 'react-bootstrap/Carousel';

function BasicCarousel({slides, buttonValue}) {
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
            <p className='mb-0'>{slide.CarouselDesc}</p>
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
    { imgSrc: 'https://reactjs.org/logo-og.png', CarouselHead: "Modal Header 2", CarouselDesc: "Modal Title Test" },
    { imgSrc: 'https://reactjs.org/logo-og.png', CarouselHead: "Modal Header 3", CarouselDesc: "Modal Title Test" },
    { imgSrc: 'https://reactjs.org/logo-og.png', CarouselHead: "Modal Header 4", CarouselDesc: "Modal Title Test" },
  ]
}

export default BasicCarousel;