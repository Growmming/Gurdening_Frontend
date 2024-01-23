import React from 'react';
import Banner from '../../components/banner/Banner';

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
      <Banner images={images} />
    </div>
  );
};

export default Home;
