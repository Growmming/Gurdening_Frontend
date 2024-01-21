import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ListContainer, ListItem, Icon, Text } from './MyPage.Style'; // 스타일 임포트

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
    <ListContainer>
      {items.map((item) => (
        <ListItem key={item.key} onClick={() => handleItemClick(item)}>
          <Icon>{/* 아이콘 */}</Icon>
          <Text>{isLoggedIn ? item.textLoggedIn : item.text}</Text>
        </ListItem>
      ))}
    </ListContainer>
  );
}
