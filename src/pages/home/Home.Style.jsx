import styled from 'styled-components';
import GurdeningImg from '../../assets/images/BannerLogo.png';

export const StyledImage = styled.img`
  max-width: 50%; // 이미지의 최대 너비를 설정
  height: auto; // 높이를 자동으로 조절하여 비율을 유지
  margin-top: 10px;
  margin-left: 31%;
`;

export const LogoImg = () => <StyledImage src={GurdeningImg} alt="Gurdening" />;
