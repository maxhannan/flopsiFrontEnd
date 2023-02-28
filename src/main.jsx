
import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './root'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { CssBaseline } from '@mui/material';
import ErrorPage from "./Error";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Recipes from './pages/Recipes';
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
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CssBaseline />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
