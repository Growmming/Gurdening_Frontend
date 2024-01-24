import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './NavBar.Style';
import HomeIcon from '../../assets/icons/icon-navigation-home.png';
import SearchIcon from '../../assets/icons/icon-navigation-search.png';
import CategoryIcon from '../../assets/icons/icon-navigation-category.png';
import PersonIcon from '../../assets/icons/icon-navigation-person.png';
import Logo from '../../assets/images/logo-main-big.png';

const NavBar = () => {
  const navigate = useNavigate();

  // 경로로 이동하는 함수
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <S.NavWrapper>
      <S.Nav>
        <S.NavItem onClick={() => handleNavigate('/')}>
          <S.NavIcon src={HomeIcon} alt="Home" />
          <S.NavText>Home</S.NavText>
        </S.NavItem>
        <S.NavItem onClick={() => handleNavigate('/search')}>
          <S.NavIcon src={SearchIcon} alt="Search" />
          <S.NavText>Search</S.NavText>
        </S.NavItem>
        <S.NavItem>
          <S.NavLogo src={Logo} alt="Logo" />
        </S.NavItem>
        <S.NavItem onClick={() => handleNavigate('/category')}>
          <S.NavIcon src={CategoryIcon} alt="Category" />
          <S.NavText>Category</S.NavText>
        </S.NavItem>
        <S.NavItem onClick={() => handleNavigate('/mypage')}>
          <S.NavIcon src={PersonIcon} alt="MyPage" />
          <S.NavText>MyPage</S.NavText>
        </S.NavItem>
      </S.Nav>
    </S.NavWrapper>
  );
};

export default NavBar;
