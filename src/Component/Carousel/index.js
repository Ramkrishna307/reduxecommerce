import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.scss'
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
    <div className='container'>
      <Slider {...settings}>
        <div>
          <img src='https://static.toiimg.com/thumb/msid-103783109,width-1070,height-580,imgsize-72754,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg'/>
        </div>
        <div>
        <img src='https://rukminim2.flixcart.com/image/850/1000/poster/b/r/g/athah-poster-dark-knight-rises-wide-screen-athdavp0207-medium-original-imadzqmyexcm8j9u.jpeg?q=90&crop=false'/>
        </div>
        <div>
        <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/fa721b0b-f3cc-4cfe-b936-dc030288927d/d3c5snv-0d0b86fe-2a0c-40aa-a813-2a7d71578140.jpg/v1/fill/w_900,h_331,q_75,strp/on_stranger_tides__wide_poster_by_andrewss7_d3c5snv-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzMxIiwicGF0aCI6IlwvZlwvZmE3MjFiMGItZjNjYy00Y2ZlLWI5MzYtZGMwMzAyODg5MjdkXC9kM2M1c252LTBkMGI4NmZlLTJhMGMtNDBhYS1hODEzLTJhN2Q3MTU3ODE0MC5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GM4ZjJfQbn7c-8KXUo1iMeg0JHyrrFQ16xWW1oxWzD8'/>
        </div>
        <div>
        <img src='https://wallpapers.com/images/high/dark-netflix-xm9ahykaozirq4em.webp'/>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;