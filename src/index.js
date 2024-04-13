import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Login from './auth/Login';
import Home from './pages/Home';
import Users from './pages/Users';
import Reports from './pages/Reports';



const router = createBrowserRouter ([
  {
    path: '/',
    element: <Login/>,
    errorElement: <Login/>,
  },
  {
    path: '/Home',
    element: <Home/>
  },
  {
    path: '/Users',
    element: <Users/>
  },
  {
    path: '/Reports',
    element: <Reports/>
  }
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