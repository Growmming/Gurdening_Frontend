import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './MyPage.Style'; // 스타일 임포트

export default function MyPageList({ items, isLoggedIn }) {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    if (!isLoggedIn && item.requiresAuth) {
      navigate('/LoginPage.jsx');
    } else {
      navigate(item.path); //해당 항목이 클릭될 때 이동해야 할 웹 페이지의 경로
    }
  };

  return (
    <S.ListContainer>
      {items.map((item) => (
        <S.ListItem key={item.key} onClick={() => handleItemClick(item)}>
          <S.Icon>{/* 아이콘 */}</S.Icon>
          <S.Text>{isLoggedIn ? item.textLoggedIn : item.text}</S.Text>
        </S.ListItem>
      ))}
    </S.ListContainer>
  );
}
