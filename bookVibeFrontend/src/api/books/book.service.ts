import axios from 'axios';
import {catchError} from '../../utils/utils.ts';
import {SearchVolumeListDto} from '../../model/books.ts';

export const getBookByISBN = async (isbn: string):Promise<SearchVolumeListDto> => {
    const [err, response] = await catchError(axios
        .get(`http://localhost:3000/isbn/${isbn}`));
    if (err) {
        console.log(err);
    }
    return response.data;
};
