import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannerStyle } from './Banner.Style';

// 이미지와 라우팅 경로를 포함하는 배열입니다.
const images = [
  { src: '/path/to/your/image1.jpg', route: '/page1' },
  { src: '/path/to/your/image2.jpg', route: '/page2' },
  { src: '/path/to/your/image3.jpg', route: '/page3' },
];

const Banner = () => {
  const navigate = useNavigate();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <BannerStyle>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.route)}>
            <img src={image.src} alt={`Banner ${index}`} />
          </div>
        ))}
      </Slider>
    </BannerStyle>
  );
};

export default Banner;
