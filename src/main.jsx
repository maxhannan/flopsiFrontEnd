
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { recipeLoader }  from './root'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import ErrorPage from "./Error";
import { createTheme, ThemeProvider } from '@mui/material/styles';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipes from './pages/Recipes';
import Recipe from './pages/Recipe';
import Login from './pages/Login';
import Register from './pages/Register';
import AuthLayout from './pages/AuthLayout';
const theme = createTheme()
const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    children: [
      {
        element: <AuthLayout />,
        children: [
          {
            path: "login",
            element: <Login />,
           
          },
          {
            path: "Register",
            element: <Register />,
          },
        ],
      },
      {
        element: <Root />,
        children: [
          {
            path: "recipes",
            element: <Recipes />,
          },
          {
            path: "recipes/:recipeId",
            element: <Recipe />,
            loader: recipeLoader,
          },
          {
            path: "prep",
            
          },
          {
            path: "calendar",
            
          
          },
          {
            path: "chat",
         
      
          },
          {
            path: "convert",
         
      
          },
        ]
      }
      
     
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
