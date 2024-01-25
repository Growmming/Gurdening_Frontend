import styled from 'styled-components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Category from './pages/category/Category';
import NavBar from './components/navBar/NavBar';
import MyInfScrollCont from './components/InfScroll/MyInfScrollCont';

const Wrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  min-height: 100vh;
  height: auto; // 페이지 로드 전 배경 테스트용 높이 설정
`;

const App = () => {
  return (
    <Wrapper>
      <MyInfScrollCont>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
        </Routes>
      </MyInfScrollCont>
    </Wrapper>
  );
};

export default App;
