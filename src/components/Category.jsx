import React from 'react';

const Category = ({ categories }) => {
  return (
    <CategoryContainer>
      {categories.map((category, index) => (
        <CategoryItem key={index}>
          {category.name}
        </CategoryItem>
      ))}
    </CategoryContainer>
  );
};

export default Category;
