import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import mainRouter from './routes/main-route';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import MyPage from './pages/MyPage';
import NavBar from './components/NavBar';
// 다른 필요한 임포트들...

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 100vh; // 페이지 로드 전 배경 테스트용 높이 설정
`;

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/search" element={<Search />} />
        <Route path="/mypage" element={<MyPage />} />
        {/* 여기에 추가로 라우트를 설정할 수 있습니다. */}
      </Routes>
    </Router>
  );
};

export default App;

// function App() {
//   return (
//     <Wrapper>
//       <h1>Hello, Gurdening!</h1>
//       <RouterProvider router={mainRouter} />
//     </Wrapper>
//   );
// }

