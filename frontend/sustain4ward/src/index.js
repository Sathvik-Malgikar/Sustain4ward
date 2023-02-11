import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './Pages/HomePage';
import ProdPage from './Pages/ProdPage';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import CampaignPage from './Pages/CampaignsPage';
import AboutUsPage from './Pages/AboutUsPage';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/home",
    element: <HomePage/>,
  },
  {
    path: "/products",
    element: <ProdPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/campaign",
    element: <CampaignPage/>,
  },
  {
    path: "/about",
    element: <AboutUsPage/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
