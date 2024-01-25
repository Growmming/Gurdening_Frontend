import styled from 'styled-components';
import GurdeningImg from '../../assets/images/BannerLogo.png';

export const StyledImage = styled.img`
  max-width: 50%; // 이미지의 최대 너비를 설정
  height: auto; // 높이를 자동으로 조절하여 비율을 유지
  margin-top: 10px;
  margin-left: 33%;
`;

export const LogoImg = () => <StyledImage src={GurdeningImg} alt="Gurdening" />;

// 배너 wrapper로 상단 width를 잡고 나서 이미지를 잡았어야 했을꺼같어
// 그리고 이미지 넣는거는 배너 사용한거처럼 src는 home 에서 <LogoImg image ={image} /> 이런식으로 넣어주면 될거같아
// 내가 2번째 줄 주석은 내가 틀렸을 수도 있는데
// 첫번째 줄 주석은 맞을꺼야 요소 단독으로 위치 시킬려고 하지말고 그만큼의 크기를 wrapper로 잡고
// 거기 내에서 positon이나 이런걸로 위치 시켜주면돼 화이팅!!
