import styled from 'styled-components';
import GurdeningImg from '../../assets/images/logo-gurdening-subtitle.png';

export const StyledImage = styled.img`
  max-width: 100%; // 이미지의 최대 너비를 설정
  height: 24vh; // 높이를 자동으로 조절하여 비율을 유지
  display: flex;
  justify-content: center; // Horizontally center children
  align-items: center; // Vertically center children
`;

export const LogoImg = () => <StyledImage src={GurdeningImg} alt="Gurdening" />;
