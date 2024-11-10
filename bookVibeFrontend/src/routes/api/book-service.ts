import axios from 'axios';
import {catchError} from '../utils/utils.ts';

export const getBookByISBN = async (isbn: string) => {
    const [err, response] = await catchError(axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`));
    if (err) {
        console.log(err);
    }
    return response.data;
};
