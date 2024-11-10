import {createBrowserRouter} from 'react-router-dom';
import Root from './root';
import ErrorPage from './error-page';
import React from 'react';
import BookPage from './book/book-page.tsx';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: '/book',
        element: <BookPage/>,
    },
]);
