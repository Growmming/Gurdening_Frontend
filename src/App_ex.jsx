//조건분기 nav바(개발중)
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Search from './pages/Search';
import MyPage from './pages/MyPage';
import NavBar from './components/NavBar';

const App_ex = () => {
  return (
    <Router>
      <Routes>
        {/* LoginPage 랜더링 x*/}
        <Route path="/login" element={<LoginPage />} />
        
        {/* s나머지 포함 */}
        <Route path="/" element={<><NavBar /><Home /></>} />
        <Route path="/category" element={<><NavBar /><Category /></>} />
        <Route path="/search" element={<><NavBar /><Search /></>} />
        <Route path="/mypage" element={<><NavBar /><MyPage /></>} />
      </Routes>
    </Router>
  );
};

export default App_ex;
