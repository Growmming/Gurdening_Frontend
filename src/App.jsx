import styled from 'styled-components';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import NavBar from './components/navBar/NavBar';
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
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Wrapper>
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

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         {/* LoginPage에 대해서는 NavBar를 렌더링하지 않습니다. */}
//         <Route path="/login" element={<LoginPage />} />

//         {/* 다른 모든 페이지에 대해서는 NavBar를 포함하여 렌더링합니다. */}
//         <Route path="/" element={<><NavBar /><Home /></>} />
//         <Route path="/category" element={<><NavBar /><Category /></>} />
//         <Route path="/search" element={<><NavBar /><Search /></>} />
//         <Route path="/mypage" element={<><NavBar /><MyPage /></>} />
//         {/* 여기에 추가로 라우트를 설정할 수 있습니다. */}
//       </Routes>
//     </Router>
//   );
// };
