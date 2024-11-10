import {describe, expect, it} from 'vitest';
import BookPage from './book-page.tsx';
import {render} from '@testing-library/react';

describe("BookPage",()=>{
    it('should be defined',()=>{
        const bookPage = render(<BookPage/>)
        expect(bookPage).toBeDefined()
    })
})
