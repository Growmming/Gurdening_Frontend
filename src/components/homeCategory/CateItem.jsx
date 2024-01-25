import React from 'react';
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';
import * as S from './CateItem.Style';

const categories = [
  { name: 'Cooking', icon: 'cook-icon.png', path: '/cooking' },
  { name: 'Daily_Life', icon: 'cook-icon.png', path: '/cook' },
  { name: 'Cleanliness', icon: 'cook-icon.png', path: '/cook' },
  { name: 'Treatment', icon: 'cook-icon.png', path: '/cook' },
  { name: 'Health', icon: 'cook-icon.png', path: '/cook' },
  { name: 'HomeEco', icon: 'cook-icon.png', path: '/cook' },
];

const CateItem = () => {
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4.5, // 부분적으로 다음 항목을 보여주기 위해 소수 사용
    slidesToScroll: 4,
    nextArrow: <SlickArrow type="next" />,
    prevArrow: <SlickArrow type="prev" />,
  };

  const handleCategoryClick = (path) => {
    navigate(path);
  };

  return (
    <S.CategoryContainer>
      <Slider {...settings}>
        {categories.map((category) => (
          <S.CategoryItem
            key={category.name}
            onClick={() => handleCategoryClick(category.path)}
          >
            <S.CategoryIcon backgroundImage={category.icon} />
            <S.CategoryName>{category.name}</S.CategoryName>
          </S.CategoryItem>
        ))}
      </Slider>
    </S.CategoryContainer>
  );
};

export default CateItem;
