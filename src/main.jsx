
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root, { loader as rootLoader }  from './root'
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
const theme = createTheme()
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "recipes/:recipeId",
        element: <Recipe />,
        loader: rootLoader,
      },
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
