import React from 'react';
import Banner from '../../components/banner/Banner';
// import GurdeningImage from '../../assets/images/logo-gurdening-subtitle.png';
import { LogoImg } from './Home.Style';
import CategoryList from '../../components/homeCategory/CategoryList';

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
      <LogoImg />
      <Banner images={images} />
      <CategoryList />
    </div>
  );
};

export default Home;
