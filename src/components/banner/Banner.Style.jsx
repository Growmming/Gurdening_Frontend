import styled from 'styled-components';

export const BannerWrapper = styled.div`
  width: 350px;
  overflow: hidden;
`;

export const BannerStyle = styled.div`
  position: relative;

  .banner-text {
    position: absolute;
    top: 10px;
    z-index: 10;
    max-width: 100%; // 텍스트 영역의 최대 너비
    white-space: nowrap; // 텍스트가 줄바꿈되지 않도록 설정
    text-align: center;

    width: 100%;
    color: white;
    font-size: 20px;
    background-color: #fbb24d;
    padding: 5px 50px;
    margin: 70px 25px 800px 25px; //top right bottom left
    // border-top-left-radius: 20px;
    // border-top-right-radius: 20px;
  }

  .banner-image img {
    width: 325px;
    display: block;
    margin: 0 auto;
  }
  img {
    max-width: 325px; // 이미지 최대 너비
    height: auto; // 높이는 자동으로 조절
    // 이미지 크기 조절을 위한 추가 스타일
    // width: 100%; // 이미지 너비를 줄입니다 (예: 전체 너비의 80%)
    margin-top: 110px;
    margin-left: 25px;
  }

  .slick-dots {
    li {
      // dots 리스트 아이템 스타일링
      button {
        // dots 버튼 스타일링
        width: 25px; // 너비
        height: 1px; // 높이
        border-radius: 0; // 원형이 아닌 네모 모양으로 변경
        background: #FBE6C9; // 배경색, 원하는 색상으로 변경 가능
        padding :1px;
        margin-left:20px;
        margin-right:20px;
        margin-top: -20px;

        &:before {
          // slick 슬라이더가 기본적으로 가지고 있는 before 스타일을 재정의
          font-size: 0; // 기존 dot 표시 제거
          color: transparent; // 투명하게 설정
        }
      }

      &.slick-active button {
        background: #FBB24D; // 활성화된 dot의 색상 변경
      }
`;
