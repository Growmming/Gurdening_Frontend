import styled from 'styled-components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
// import NavBar from './components/navBar/NavBar';
// import Category from '../pages/category/Category';
// import Search from '../pages/search/Search';
// import MyPage from '../pages/mypage/MyPage';
// import NavBar from '../components/NavBar';

const Wrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  height: 100vh; // 페이지 로드 전 배경 테스트용 높이 설정
`;

const Container = styled.div`
  width: 325px;
  background-color: #ffffff;
  height: 100vh; // 페이지 로드 전 배경 테스트용 높이 설정
`;

const App = () => {
  return (
    <Wrapper>
      {/* <NavBar /> */}
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Wrapper>
  );
};

export default App;
