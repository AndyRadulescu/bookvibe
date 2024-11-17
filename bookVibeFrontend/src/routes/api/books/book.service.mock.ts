const returnBook = {
    'kind': 'books#volumes', 'totalItems': 1, 'items': [{
        'kind': 'books#volume',
        'id': 'Jelk7EMpA7sC',
        'etag': 'LCTbTS14ut4',
        'selfLink': 'https://www.googleapis.com/books/v1/volumes/Jelk7EMpA7sC',
        'volumeInfo': {
            'title': 'The Lord of the Rings',
            'subtitle': null,
            'authors': ['John Ronald Reuel Tolkien'],
            'publisher': null,
            'publishedDate': '1991',
            'description': 'A beautiful illustrated boxed set collecting the two most popular Tolkien hardbacks -- the Centenary edition of The Lord of the Rings and the 60th Anniversary edition of The Hobbit, both illustrated by Alan Lee. Since they were first published, The Hobbit and The Lord of the Rings have been two books people have treasured. Steeped in unrivalled magic and otherworldliness, these works of sweeping fantasy have touched the hearts of young and old alike. Between them, nearly 100 million copies have been sold around the world. And no editions have proved more popular than the two that were illustrated by award-winning artist, Alan Lee -- the Centenary edition of The Lord of the Rings and the 60th Anniversary edition of The Hobbit. Now, for the first time, these two beautifully illustrated hardbacks have been collected together into one deluxe boxed set. Readers will be able to follow the complete story of the Hobbits and their part in the quest for the Ring -- beginning with Bilbo\'s fateful visit from Gandalf and culminating in the dramatic climax between Frodo and Gollum atop Mount Doom -- while also enjoying over seventy full-page colour paintings and numerous illustrations which acco',
            'industryIdentifiers': [{'type': 'ISBN_10', 'identifier': '0261102435'}, {
                'type': 'ISBN_13',
                'identifier': '9780261102439'
            }],
            'readingModes': {'text': false, 'image': false},
            'pageCount': 1193,
            'dimensions': null,
            'printType': 'BOOK',
            'mainCategory': null,
            'categories': ['Adventure stories'],
            'averageRating': 4.5,
            'ratingCount': null,
            'contentVersion': '2.4.2.0.preview.0',
            'imageLinks': {
                'smallThumbnail': 'http://books.google.com/books/content?id=Jelk7EMpA7sC&printsec=frontcover&img=1&zoom=5&source=gbs_api',
                'thumbnail': 'http://books.google.com/books/content?id=Jelk7EMpA7sC&printsec=frontcover&img=1&zoom=1&source=gbs_api',
                'small': null,
                'medium': null,
                'large': null,
                'extraLarge': null
            },
            'language': 'en',
            'previewLink': 'http://books.google.ro/books?id=Jelk7EMpA7sC&dq=isbn:9780261102439&hl=&cd=1&source=gbs_api',
            'infoLink': 'http://books.google.ro/books?id=Jelk7EMpA7sC&dq=isbn:9780261102439&hl=&source=gbs_api',
            'canonicalVolumeLink': 'https://books.google.com/books/about/The_Lord_of_the_Rings.html?hl=&id=Jelk7EMpA7sC'
        },
        'saleInfo': {
            'country': 'RO',
            'saleability': 'NOT_FOR_SALE',
            'isEbook': false,
            'onSaleDate': null,
            'listPrice': null,
            'retailPrice': null,
            'buyLink': null
        },
        'userInfo': null,
        'accessInfo': {
            'country': 'RO',
            'viewability': 'NO_PAGES',
            'embeddable': false,
            'publicDomain': false,
            'textToSpeechPermission': 'ALLOWED',
            'epub': {'isAvailable': false, 'downloadLink': null, 'acsTokenLink': null},
            'pdf': {'isAvailable': false, 'downloadLink': null, 'acsTokenLink': null},
            'webReaderLink': 'http://play.google.com/books/reader?id=Jelk7EMpA7sC&hl=&source=gbs_api',
            'accessViewStatus': 'NONE',
            'quoteSharingAllowed': false,
            'downloadAccess': null
        },
        'searchInfo': {'textSnippet': 'A beautiful illustrated boxed set collecting the two most popular Tolkien hardbacks -- the Centenary edition of The Lord of the Rings and the 60th Anniversary edition of The Hobbit, both illustrated by Alan Lee.'}
    }]
};

export const getBookByISBNMock = () => {
    return Promise.resolve(returnBook);
};
