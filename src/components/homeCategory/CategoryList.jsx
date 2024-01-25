import React from 'react';
import CateItem from './CateItem';

// 카테고리 데이터 리스트
const categories = [
  { name: 'Cooking', icon: 'cook-icon.png', path: '/menual1' },
  { name: 'Daily_Life', icon: 'cook-icon.png', path: '/menual2' },
  { name: 'Cleanliness', icon: 'cook-icon.png', path: '/menual3' },
  { name: 'Treatment', icon: 'cook-icon.png', path: '/menual4' },
  { name: 'Health', icon: 'cook-icon.png', path: '/menual5' },
  { name: 'HomeEco', icon: 'cook-icon.png', path: '/menual6' },
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
