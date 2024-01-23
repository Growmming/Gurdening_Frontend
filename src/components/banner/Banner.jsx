import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as S from './Banner.Style';

// 이미지 & 라우팅 경로
const images = [
  {
    src: 'https://i.pinimg.com/474x/df/18/ac/df18ac30c985344f6a2efd7fb691a2d5.jpg',
    route: '/page1',
  },
  {
    src: 'https://i.pinimg.com/474x/b2/28/4a/b2284a4a46d4d28e99759b1c8f3942a2.jpg',
    route: '/page2',
  },
  {
    src: 'https://i.pinimg.com/474x/b2/28/4a/b2284a4a46d4d28e99759b1c8f3942a2.jpg',
    route: '/page3',
  },
];

const Banner = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const handleImageClick = (route) => {
    navigate(route);
  };

  return (
    <S.BannerStyle>
      <div className="banner-text">Today's Menual</div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} onClick={() => handleImageClick(image.route)}>
            <img src={image.src} alt={`Banner ${index}`} />
          </div>
        ))}
      </Slider>
    </S.BannerStyle>
  );
};

export default Banner;
