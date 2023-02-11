import logo from './logo.svg';
import './App.css';
import HomePage from './Pages/HomePage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomePage/>,
  }
]);


function App() {
  return (<RouterProvider router={router}/>
  );
}

export default App;
