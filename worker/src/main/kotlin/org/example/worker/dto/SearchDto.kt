package org.example.worker.dto

import com.fasterxml.jackson.annotation.JsonFormat
import com.fasterxml.jackson.annotation.JsonProperty

data class SearchDto<T>(@JsonProperty val pattern: PatternType, val data: T, val id: String) {

    @JsonFormat(shape = JsonFormat.Shape.OBJECT)
    enum class PatternType(val pattern: String) {
        searchBooks(SearchDto.SEARCH_BOOKS),

        isbn(SearchDto.ISBN);
    }

    companion object {
        const val SEARCH_BOOKS = "searchBooks"
        const val ISBN = "isbn"
    }
}

data class BookDto(val book: String)
data class IsbnDto(val isbn: String)
