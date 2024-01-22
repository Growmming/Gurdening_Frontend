import React from 'react';
import SBannerSlider from '../../components/SBannerSlider';

// const HomePage = () => {
//     const images = [
//         { url: '', link: '/first-page' },
//         { url: '', link: '/second-page' },
//         { url: '', link: '/third-page' },
//     ]

const Home = () => {
  const bannerImages = [
    { url: '/assets/banner1.jpg' },
    { url: '/assets/banner2.jpg' },
    { url: '/assets/banner3.jpg' },
    // ... 더 많은 이미지
  ];

  const categories = [
    { name: 'Category 1' },
    { name: 'Category 2' },
    { name: 'Category 3' },
    // ... 더 많은 카테고리
  ];

  return (
    <div>
      <SBannerSlider images={bannerImages} />
      <Category categories={categories} />
      {/* 여기에 Home 페이지의 나머지 요소들을 추가하세요 */}
    </div>
  );
};

export default Home;
