import styled from 'styled-components';

export const CateItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px; // 카테고리 아이템의 너비
  // height: 100px;
  height: auto;
  margin-left: 5px;
  margin-right: 5px;
  cursor: pointer;
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
  width: 24px; // 아이콘의 너비
  height: 24px; // 아이콘의 높이
`;

export const CateTextWrapper = styled.div`
  width: 100%; // 텍스트 컨테이너의 너비를 아이템 너비와 동일하게 설정
  display: flex;
  justify-content: center; // 텍스트를 중앙에 위치
`;

export const CateText = styled.span`
  font-size: 15px; // 텍스트의 폰트 크기
  color: #848484; // 텍스트의 색상
  text-align: center; // 텍스트 중앙 정렬
  // font-weight: bold;
`;

// import styled from 'styled-components';

// export const CateItemWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: #d2d999;
//   width: 70px; // Adjust the width as needed
//   height: 60px;
//   margin: 5px;
//   border-radius: 20px;
//   cursor: pointer;
// `;

// export const CateIconWrapper = styled.div`
//   width: 70px; // Match the width of the wrapper
//   height: 70px; // Match the height you want for the icon background
//   // background-color: #d2d999;
//   border-radius: 10px; // Adjust the radius as needed
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// export const CateIcon = styled.img`
//   position: absolute;
//   width: 24px; // Adjust the size of the icon as needed
//   height: 24px;
//   margin-top: 10px;
//   justify-content: center;
//   align-items: center;
// `;

// export const CateText = styled.span`
//   font-size: 12px;
//   color: black;
//   text-align: center;
//   // margin-top: 5S0px; // Adjust the space between the icon and the text as needed;;
// `;
