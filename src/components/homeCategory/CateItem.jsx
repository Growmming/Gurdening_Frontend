// CateItem.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './CateItem.Style';

const CateItem = ({ name, icon, path }) => {
  const navigate = useNavigate();

  const handleItemClick = () => {
    navigate(path);
  };

  return (
    <S.CateItemWrapper onClick={handleItemClick}>
      <S.CateIcon src={icon} alt={`${name} icon`} />
      <S.CateText>{name}</S.CateText>
    </S.CateItemWrapper>
  );
};

export default CateItem;
