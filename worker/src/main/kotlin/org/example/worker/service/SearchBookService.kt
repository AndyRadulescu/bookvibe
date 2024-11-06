package org.example.worker.service

import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToFlux
import reactor.core.publisher.Flux

@RestController
class SearchBookService() {
    fun searchBook(queryParam: String): Flux<Any> {
        return WebClient.create()
                .get()
                .uri("${GOOGLE_BOOKS_API_URL}${queryParam}")
                .retrieve()
                .bodyToFlux<Any>()
    }

    companion object {
        private const val GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q="
    }
}
