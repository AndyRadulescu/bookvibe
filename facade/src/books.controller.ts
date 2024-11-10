import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';
import { Observable } from 'rxjs';

@Controller()
export class BooksController {
  constructor(private readonly booksService: BooksService) {
  }

  @Get('search/:name')
  searchBooks(@Param() param: { bookName: string }): Observable<any> {
    return this.booksService.getBooksListByName(param.bookName);
  }

  // TODO: validation
  @Get('isbn/:isbn')
  searchBookByIsbn(@Param() param: { isbn: string }): Observable<any> {
    return this.booksService.getBookByIsbn(param.isbn);
  }
}
