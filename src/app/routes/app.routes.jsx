import React from 'react';
import { useRoutes } from 'react-router-dom';
import HomePage from '../../pages/Home/HomePage';

const AppRoutes = () => {

    const routes = useRoutes([
        {
            path: "/",
            element: <HomePage />
        }
    ])

    return routes
};

export default AppRoutes;