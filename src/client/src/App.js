import React, { Children } from "react";

import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import HdHome from "./pages/HdHome";
import HdCreate from "./pages/HdCreate";
import HdUpdate from "./pages/HdUpdate";
import HdList from "./pages/HdList";

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
