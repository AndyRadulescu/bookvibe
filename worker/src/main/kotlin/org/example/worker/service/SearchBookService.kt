package org.example.worker.service

import org.example.worker.dto.SearchVolumeList
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToFlux
import org.springframework.web.reactive.function.client.bodyToMono
import reactor.core.publisher.Flux
import reactor.core.publisher.Mono

@RestController
class SearchBookService() {

    @Value("\${books.api.key}")
    private val apiKey: String? = null

    @Value("\${books.api.limit}")
    private val limit: String? = null

    fun searchBook(bookName: String): Flux<SearchVolumeList> {
        return WebClient.create()
                .get()
                .uri("${GOOGLE_BOOKS_API_URL}${bookName}&limit=${limit}&key=${apiKey}")
                .retrieve()
                .bodyToFlux<SearchVolumeList>()
    }

    fun getBookByIsbn(isbn: String): Mono<SearchVolumeList> {
        return WebClient.create()
                .get()
                .uri("${GOOGLE_BOOKS_API_URL}isbn:${isbn}&key=${apiKey}")
                .retrieve()
                .bodyToMono<SearchVolumeList>()
    }

    companion object {

        private const val GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q="
        private const val SEARCH = "?q="
    }
}
