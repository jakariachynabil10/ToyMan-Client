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
import AllToys from './AllToys/AllToys.jsx';
import MyToys from './MyToys/MyToys.jsx';
import AddToys from './AddToys/AddToys.jsx';
import BLog from './Blog/BLog.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children : [
      {
        path : '/',
        element : <App></App>
      },
      {
        path : '/allToys',
        element : <AllToys></AllToys>
      },
      {
        path : '/myToys',
        element : <MyToys></MyToys>
      },
      {
        path : '/addToys',
        element : <AddToys></AddToys>
      },
      {
        path : '/',
        element : <App></App>
      },
      {
        path : '/blog',
        element : <BLog></BLog>
      },
      {
        path : '/login',
        element : <Login></Login>
      },
      {
        path : '/register',
        element :<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
