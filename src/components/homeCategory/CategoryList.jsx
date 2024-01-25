import React from 'react';
import CateItem from './CateItem';

// 카테고리 데이터 리스트
const categoryData = [
  { name: 'Cooking', icon: 'cook-icon.png', path: '/cooking' },
  { name: 'Daily_Life', icon: 'cook-icon.png', path: '/cook' },
  { name: 'Cleanliness', icon: 'cook-icon.png', path: '/cook' },
  { name: 'Treatment', icon: 'cook-icon.png', path: '/cook' },
  { name: 'Health', icon: 'cook-icon.png', path: '/cook' },
  { name: 'House', icon: 'cook-icon.png', path: '/cook' },
];

const CategoryList = () => {
  return (
    <div>
      {categoryData.map((category, index) => (
        <CateItem
          key={index}
          name={category.name}
          icon={category.icon}
          path={category.path}
        />
      ))}
    </div>
  );
};

export default CategoryList;
