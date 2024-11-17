import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {bookTransportContext} from '../api/books/transport.ts';

export default function BookPage() {
    const {isbn} = useParams<{ isbn: string }>();
    const [book, setBook] = useState([]);
    const bookTransport = useContext(bookTransportContext());
    useEffect(() => {
        bookTransport(isbn).then(data => setBook(data));
    }, []);

    return (
        <div>
            <h1>Book page {isbn}</h1>
            <div>{JSON.stringify(book)}</div>
        </div>
    );
}
