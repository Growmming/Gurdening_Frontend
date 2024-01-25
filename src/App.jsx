import styled from 'styled-components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar';

const Wrapper = styled.div`
  position: relative;
  background-color: #ffffff;
  height: 100vh; // 페이지 로드 전 배경 테스트용 높이 설정
`;

const App = () => {
  return (
    <Wrapper>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Wrapper>
  );
};

export default App;
