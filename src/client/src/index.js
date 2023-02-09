import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import App from './App';
import HdCreate from './pages/HdCreate';
import HdUpdate from './pages/HdUpdate';

import store from './store'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: "/create",
        element: <HdCreate />
    },
    {
        path: "/update/:id",
        element: <HdUpdate />
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </React.StrictMode>
);
