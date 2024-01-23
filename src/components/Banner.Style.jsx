import styled from 'styled-components';

export const BannerStyle = styled.div`
  .slick-slide {
    text-align: center;
    img {
      width: 100%;
      cursor: pointer;
      // 여기에 이미지 스타일을 추가합니다.
    }
  }

  // react-slick의 dots 스타일을 여기에 추가할 수 있습니다.
  .slick-dots {
    bottom: -30px; // 위치를 조정할 수 있습니다.
  }
`;
