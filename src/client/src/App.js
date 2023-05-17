import React from "react";

import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HdHome from "./pages/MainPages/Home/HdHome";
import HdCreate from "./pages/MainPages/Hds/HdCreate";
import HdUpdate from "./pages/MainPages/Hds/HdUpdate";
import HdList from "./pages/MainPages/Hds/HdList";
import EditLocationPage from "./pages/UserPages/EditLocationPage";
import LoginPage from "./pages/Login/LoginPage";

import store from "./store";
import NavBar from "./components/NavBar";

const AppLayout = () => (
  <>
    <NavBar />
    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/home",
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
    path: "/",
    element: <LoginPage />,
  },
  {
    element: <EditLocationPage />,
    path: "/edit-loc/:id",
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
