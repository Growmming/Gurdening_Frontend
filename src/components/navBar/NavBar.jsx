import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import * as S from './NavBar.Style';
import HomeIcon from '../../assets/icons/icon-navigation-home.png';
import SearchIcon from '../../assets/icons/icon-navigation-search.png';
import CategoryIcon from '../../assets/icons/icon-navigation-category.png';
import PersonIcon from '../../assets/icons/icon-navigation-person.png';
import Logo from '../../assets/images/logo-main-big.png';
import HomeIconActive from '../../assets/icons/icon-navigation-home-active.png';
import SearchIconActive from '../../assets/icons/icon-navigation-search-active.png';
import CategoryIconActive from '../../assets/icons/icon-navigation-category-active.png';
import PersonIconActive from '../../assets/icons/icon-navigation-person-active.png';

const NavBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <S.NavWrapper>
      <S.Nav>
        <S.NavItem onClick={() => navigate('/')}>
          <S.NavIcon
            src={isActive('/') ? HomeIconActive : HomeIcon}
            alt="Home"
          />
          <S.NavText $active={isActive('/')}>홈페이지</S.NavText>
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/search')}>
          <S.NavIcon
            src={isActive('/search') ? SearchIconActive : SearchIcon}
            alt="Search"
          />
          <S.NavText $active={isActive('/search')}>찾아보기</S.NavText>
        </S.NavItem>
        <S.NavItem>
          <S.NavLogo src={Logo} alt="Logo" />
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/category')}>
          <S.NavIcon
            src={isActive('/category') ? CategoryIconActive : CategoryIcon}
            alt="Category"
          />
          <S.NavText $active={isActive('/category')}>카테고리</S.NavText>
        </S.NavItem>
        <S.NavItem onClick={() => navigate('/mypage')}>
          <S.NavIcon
            src={isActive('/mypage') ? PersonIconActive : PersonIcon}
            alt="MyPage"
          />
          <S.NavText $active={isActive('/mypage')}>내 정보</S.NavText>
        </S.NavItem>
      </S.Nav>
    </S.NavWrapper>
  );
};

export default NavBar;
