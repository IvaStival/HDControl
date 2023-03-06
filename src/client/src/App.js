import React from "react";

import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HdHome from "./pages/MainPages/Home/HdHome";
import HdCreate from "./pages/MainPages/Hds/HdCRUDPages/HdCreate";
import HdUpdate from "./pages/MainPages/Hds/HdCRUDPages/HdUpdate";
import HdList from "./pages/MainPages/Hds/HdList";

import store from "./store";
import NavBar from "./components/NavBar";
import HdUpdateLocation from "./pages/MainPages/LocationEdit/HdLocationEdit";

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
      {
        path: "/update-loc/:id",
        element: <HdUpdateLocation />,
      },
    ],
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
