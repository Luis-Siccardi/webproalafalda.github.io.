import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
/* NO TENGO QUE ENTENDERLO TODO XD*/ 
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
/*se importa login */
import Login from './Components/Login/Login';

const router = createBrowserRouter([
  /*para crear otras rutas. ej:la primera que aparece es app
  la segunda es la de login y no se tiene que reenderizar como wikipedia
  es como un dicionario de rutas */
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/",
    element: <App/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
