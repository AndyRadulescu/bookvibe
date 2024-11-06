package org.example.worker.dto

data class SearchDto<T>(val pattern: String, val data: T, val id: String) {
}

data class BookDto(val book:String)
