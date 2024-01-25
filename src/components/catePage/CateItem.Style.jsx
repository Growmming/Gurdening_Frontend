import styled from 'styled-components';

export const CateItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
  background-color: #f0f0f0; // 색상은 예시입니다. 실제 디자인에 맞게 조정해야 합니다.
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e0e0e0; // 호버 상태의 배경색 변경
  }
`;

export const CateIconWrapper = styled.div`
  width: 70px; // 아이콘 배경의 너비
  height: 70px; // 아이콘 배경의 높이
  background-color: #d2d999; // 아이콘 배경의 색상
  border-radius: 10px; // 아이콘 배경의 둥근 모서리
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px; // 아이콘과 텍스트 사이의 여백
`;

export const CateIcon = styled.img`
  width: 50px; // 크기는 예시입니다. 실제 디자인에 맞게 조정해야 합니다.
  height: 50px;
  margin-right: 10px;
`;

export const CateTextWrapper = styled.div`
  width: 100%; // 텍스트 컨테이너의 너비를 아이템 너비와 동일하게 설정
  display: flex;
  justify-content: center; // 텍스트를 중앙에 위치
`;

export const CateText = styled.span`
  font-size: 16px; // 폰트 사이즈는 예시입니다. 실제 디자인에 맞게 조정해야 합니다.
  color: #333; // 폰트 색상
`;
