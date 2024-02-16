import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const staticSlides = [
    {
      id: 1,
      imageUrl: 'https://abinayaanagarajan.github.io/HTML_CSS/bootstrap/images/winner2.png',
      alt: 'Banner 1',
    },
    {
      id: 2,
      imageUrl: 'https://abinayaanagarajan.github.io/HTML_CSS/bootstrap/images/winner2.png',
      alt: 'Banner 2',
    },
    {
      id: 3,
      imageUrl: 'https://abinayaanagarajan.github.io/HTML_CSS/bootstrap/images/winner2.png',
      alt: 'Banner 3',
    },
  ];

  return (
    <Slider className="banner-slider" {...settings}>
      {staticSlides.map((slide) => (
        <div key={slide.id}>
          <img src={slide.imageUrl} alt={slide.alt} />
        </div>
      ))}
    </Slider>
  );
};

export default BannerSlider;
