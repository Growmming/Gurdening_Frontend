// CateItem.Style.js
import styled from 'styled-components';

export const CateItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: #76b947;
  margin: 5px;
  border-radius: 10px;
  cursor: pointer;
`;

export const CateIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
`;

export const CateText = styled.span`
  font-size: 12px;
  color: white;
  text-align: center;
  margin-top: 10px;
`;
