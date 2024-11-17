import {createContext} from 'react';
import {getBookByISBN} from './book.service.ts';
import {getBookByISBNMock} from './book.service.mock.ts';

export const bookTransportContext = () => {
    if (import.meta.env.VITE_MOCK_SERVICES) {
        return createContext(getBookByISBNMock);
    }
    return createContext(getBookByISBN);
};

