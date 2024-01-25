import styled from 'styled-components';

export const CategoryContainer = styled.div`
  padding: 10px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin-right: 15px; // 마지막 아이템을 위한 오른쪽 여백
`;

export const CategoryIcon = styled.div`
  width: 60px;
  height: 60px;
  background-image: url(${(props) => `/assets/icons/${props.backgroundImage}`});
  background-size: cover;
  border-radius: 50%;
  margin-bottom: 5px;
`;

export const CategoryName = styled.div`
  font-size: 14px;
  color: #333;
`;
