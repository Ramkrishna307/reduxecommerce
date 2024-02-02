import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss';

const Carousel = () => {
  const settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div className=''>
      <Slider {...settings}>
        <div>
          <img src='https://assets-in.bmscdn.com/discovery-catalog/events/et00110845-uhfnsagejl-landscape.jpg' alt='slide1' />
        </div>
        <div>
          <img src='https://rukminim2.flixcart.com/image/850/1000/poster/b/r/g/athah-poster-dark-knight-rises-wide-screen-athdavp0207-medium-original-imadzqmyexcm8j9u.jpeg?q=90&crop=false' alt='slide2' />
        </div>
        <div>
          <img src='https://assets.thehansindia.com/h-upload/2022/03/26/1600x960_1283681-rrr.jpg' alt='slide3' />
        </div>
        <div>
          <img src='https://wallpapers.com/images/high/dark-netflix-xm9ahykaozirq4em.webp' alt='slide4' />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
