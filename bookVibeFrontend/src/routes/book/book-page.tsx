import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {getBookByISBN} from '../api/book-service.ts';

export default function BookPage() {
    const {isbn} = useParams<{ isbn: string }>();
    const [book, setBook] = useState([]);

    useEffect(() => {
        getBookByISBN(isbn).then(data => setBook(data));
    }, []);

    return (
        <div>
            <h1>Book page {isbn}</h1>
            <div>{JSON.stringify(book)}</div>
        </div>
    );
}
