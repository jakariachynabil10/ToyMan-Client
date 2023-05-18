import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'react-tabs/style/react-tabs.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './Main/Main.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [
      {
        path : '/',
        element : <App></App>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
