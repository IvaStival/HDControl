import React from "react";

import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HdHome from "./pages/MainPages/Home/HdHome/HdHome";
import HdCreate from "./pages/MainPages/Hds/HdCreate/HdCreate";
import HdUpdate from "./pages/MainPages/Hds/HdUpdate/HdUpdate";
import HdList from "./pages/MainPages/Hds/HdList/HdList";
import EditLocationPage from "./pages/UserPages/EditLocationPage/EditLocationPage";
import LoginPage from "./pages/Login/LoginPage/LoginPage";

import store from "./store";
import NavBar from "./pages/NavBar/NavBar";
import RegisterPage from "./pages/Login/RegisterPage/RegisterPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: (
      // <ProtectedRoute>
      <AppLayout />
      // </ProtectedRoute>
    ),
    children: [
      {
        path: "/",
        element: <HdHome />,
      },
      {
        path: "/hds",
        element: <HdList />,
      },
      {
        path: "/create",
        element: <HdCreate />,
      },
      {
        path: "/update/:id",
        element: <HdUpdate />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    element: <EditLocationPage />,
    path: "/edit-loc/:id",
  },
  {
    element: <RegisterPage />,
    path: "/register",
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  );
};

export default App;
