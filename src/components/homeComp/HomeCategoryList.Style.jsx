import styled from 'styled-components';

export const CategoryListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
  padding: 10px;
  padding-bottom: 30px;
  max-height: 100vh;
  overflow-y: auto;
  margin-top: 30px;
`;

export const CategoryTitle = styled.h2`
  padding-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  color: #677d22;
`;

export const CategoryItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
`;
