import styled from 'styled-components';

export const BannerStyle = styled.div`
  position: relative; // 오버레이를 위한 상대적 위치 설정

  .banner-text {
    position: absolute; // 절대 위치 사용
    top: 10px; // 상단에서의 위치
    left: 50%; // 가운데 정렬을 위해 왼쪽에서 50% 위치
    transform: translateX(-50%); // 가운데 정렬을 위한 변환
    z-index: 10; // 이미지 위에 표시되도록 z-index 설정
    max-width: 100%; // 텍스트 영역의 최대 너비
    white-space: nowrap; // 텍스트가 줄바꿈되지 않도록 설정

    
    // 스타일링
    color: white;
    font-size: 20px;
    background-color: #fbb24d;
    padding: 5px 60px;
    margin : 80px 25px 800px 25px; //top right bottom left
    // border-top-left-radius: 20px;
    // border-top-right-radius: 20px;
  }

  .banner-image {
    width: 100%;
    display: block;
  }

  img {
    max-width: 300px; // 이미지 최대 너비
    height: 322px; // 높이는 자동으로 조절
    // 이미지 크기 조절을 위한 추가 스타일
    // width: 100%; // 이미지 너비를 줄입니다 (예: 전체 너비의 80%)
    margin-top: 140px;
    margin-left: 58px;
  }
}

  .slick-dots {
    li {
      // dots 리스트 아이템 스타일링
      button {
        // dots 버튼 스타일링
        width: 25px; // 너비
        height: 10px; // 높이
        border-radius: 0; // 원형이 아닌 네모 모양으로 변경
        background: #; // 배경색, 원하는 색상으로 변경 가능

        &:before {
          // slick 슬라이더가 기본적으로 가지고 있는 before 스타일을 재정의
          font-size: 0; // 기존 dot 표시 제거
          color: transparent; // 투명하게 설정
        }
      }

      &.slick-active button {
        background: #ff00ff; // 활성화된 dot의 색상 변경
      }
    }
  }
`;
