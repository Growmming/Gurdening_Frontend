import React from 'react';
import SBannerSlider from '../../components/SBannerSlider';

const HomePage = () => {
    const images = [
        { url: '/assets/first-image.jpg', link: '/first-page' },
        { url: '/assets/second-image.jpg', link: '/second-page' },
        { url: '/assets/third-image.jpg', link: '/third-page' },
    ];

    return (
        <div>
            <SBannerSlider images={images} />
            {/* 페이지의 다른 컨텐츠 */}
        </div>
    );
};

export default HomePage;
