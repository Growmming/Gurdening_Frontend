import { createBrowserRouter } from 'react-router-dom';
import './App.css';


const router = createBrowserRouter ([
  {
    path : "/",
    element:<div>Home</div>,
    children: [
      {path:"", element: <div>home</div>},
      {path:"", element: <div>home</div>},
      {path:"", element: <div>home</div>}
    ]
  },
]);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;
