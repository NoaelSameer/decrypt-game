import React from 'react';
import ReactDOM from 'react-dom/client';
import './pages/css/index.css';
import App from './App';
import Cypher from './level';
import Namer from "./Namer";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {path:"/home", element: <App />},
  {path:"/level", element:<Cypher />},
  {path:"/", element:<Namer />}

  // {path:"/gallery", element: <Gallery />},
  // Add more routes as needed
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
