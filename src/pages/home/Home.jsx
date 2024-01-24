import React from 'react';
import Banner from '../../components/banner/Banner';
// import GurdeningImage from '../../assets/images/logo-gurdening-subtitle.png';
import { LogoImg } from './Home.Style';
const Home = () => {
  const images = [
    {
      url: 'https://i.pinimg.com/474x/20/a0/6e/20a06e6082e194139238e0a7f19f9fc6.jpg',
      link: '/menual',
    },
    {
      url: 'https://i.pinimg.com/474x/20/a0/6e/20a06e6082e194139238e0a7f19f9fc6.jpg',
      link: '/menual',
    },
    {
      url: 'https://i.pinimg.com/474x/20/a0/6e/20a06e6082e194139238e0a7f19f9fc6.jpg',
      link: '/menual',
    },
  ];

  return (
    <div>
      {/* <img
        src={GurdeningImage}
        alt="Gurdening"
        style={{ maxWidth: '100%', height: '23vh' }} // 여기에서 이미지의 최대 너비를 설정
      />
      <img src={GurdeningImage} alt="Gurdening" /> */}
      <LogoImg />
      <Banner images={images} />
    </div>
  );
};

export default Home;
