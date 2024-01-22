// components/SBannerSlider.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { StyledSlider } from './SBannerSlider.styles';

const SBannerSlider = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <StyledSlider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <Link to={image.link}>
                        <img src={image.url} alt={`Slide ${index + 1}`} />
                    </Link>
                </div>
            ))}
        </StyledSlider>
    );
};

export default SBannerSlider;
