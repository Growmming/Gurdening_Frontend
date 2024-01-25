import React from 'react';
import { useNavigate } from 'react-router-dom';
import StyledCateItem from './CateItem.Style'; // 스타일 파일을 임포트합니다.

const CateItem = ({ name, icon, path }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(path); // 클릭 시 해당 경로로 이동
  };

  return (
    <StyledCateItem onClick={handleItemClick}>
      <div className="icon">
        <img src={icon} alt={`${name} icon`} />
      </div>
      <div className="name">{name}</div>
    </StyledCateItem>
  );
};

export default CateItem;

// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import * as S from './CateItem.Style';

// const CateItem = ({ name, icon, path }) => {
//   const navigate = useNavigate();

//   const handleItemClick = () => {
//     navigate(path);
//   };

//   return (
//     <S.CategoryItem onClick={handleItemClick}>
//       <div className="icon">
//         <img src={icon} alt={`${name} icon`} />
//       </div>
//       <div className="name">{name}</div>
//     </S.CategoryItem>
//   );
// };

// export default CateItem;
