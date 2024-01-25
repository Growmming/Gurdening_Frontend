// CategoryList.js
import React from 'react';
import CateItem from './CateItem';
import { CategoryListWrapper } from './CategoryList.Style';

// 카테고리 데이터 리스트
const categoryData = [
  { name: '요리', icon: 'cook-icon.png', path: '/menual1' },
  { name: '일상생활', icon: 'cook-icon.png', path: '/menual2' },
  { name: '청결', icon: 'cook-icon.png', path: '/menual3' },
  { name: '치료', icon: 'cook-icon.png', path: '/menual4' },
  { name: '건강', icon: 'cook-icon.png', path: '/menual5' },
  { name: '가정', icon: 'cook-icon.png', path: '/menual6' },
];

const CategoryList = () => {
  return (
    <CategoryListWrapper>
      {categoryData.map((category) => (
        <CateItem
          key={category.name}
          name={category.name}
          icon={category.icon}
          path={category.path}
        />
      ))}
    </CategoryListWrapper>
  );
};

export default CategoryList;

// import React from 'react';
// import CateItem from './CateItem';

// // 카테고리 데이터 리스트
// const categoryData = [
//   { name: 'Cooking', icon: 'cook-icon.png', path: '/menual1' },
//   { name: 'Daily_Life', icon: 'cook-icon.png', path: '/menual2' },
//   { name: 'Cleanliness', icon: 'cook-icon.png', path: '/menual3' },
//   { name: 'Treatment', icon: 'cook-icon.png', path: '/menual4' },
//   { name: 'Health', icon: 'cook-icon.png', path: '/menual5' },
//   { name: 'HomeEco', icon: 'cook-icon.png', path: '/menual6' },
// ];

// const CategoryList = () => {
//   return (
//     <div>
//       {categoryData.map((category) => (
//         <CateItem
//           key={category.name}
//           name={category.name}
//           icon={category.icon}
//           path={category.path}
//         />
//       ))}
//     </div>
//   );
// };

// export default CategoryList;
