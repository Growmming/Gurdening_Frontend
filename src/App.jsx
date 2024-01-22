import styled from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import mainRouter from './routes/main-route';

const Wrapper = styled.div`
  background-color: #ffffff;
  height: 100vh; // 페이지 로드 전 배경 테스트용 높이 설정
`;

function App() {
  return (
    <Wrapper>
      <h1>Hello, Gurdening!</h1>
      <RouterProvider router={mainRouter} />
    </Wrapper>
  );
}

export default App;
