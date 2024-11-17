import {useParams} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {bookTransportContext} from '../../api/books/transport.ts';
import {SearchVolumeListDto} from '../../model/books.ts';

export default function BookPage() {
    const {isbn} = useParams<{ isbn: string }>();
    const [book, setBook] = useState<SearchVolumeListDto | null>(null);
    const bookTransport = useContext(bookTransportContext());
    useEffect(() => {
        bookTransport(isbn).then(data => setBook(data));
    }, [isbn, bookTransport]);

    return (
        <div>
            <h1>Page count {book?.items[0].volumeInfo.pageCount}</h1>
            <div>{JSON.stringify(book)}</div>
        </div>
    );
}
