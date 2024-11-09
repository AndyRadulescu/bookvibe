package org.example.worker.service

import org.example.worker.dto.SearchVolumeList
import org.springframework.beans.factory.annotation.Value
import org.springframework.web.bind.annotation.RestController
import org.springframework.web.reactive.function.client.WebClient
import org.springframework.web.reactive.function.client.bodyToFlux
import reactor.core.publisher.Flux

@RestController
class SearchBookService() {

    @Value("\${books.api.key}")
    private val apiKey: String? = null

    @Value("\${books.api.limit}")
    private val limit: String? = null

    fun searchBook(queryParam: String): Flux<SearchVolumeList> {
        return WebClient.create()
                .get()
                .uri("${GOOGLE_BOOKS_API_URL}${queryParam}&limit=${limit}&key=${apiKey}")
                .retrieve()
                .bodyToFlux<SearchVolumeList>()
    }

    companion object {
        private const val GOOGLE_BOOKS_API_URL = "https://www.googleapis.com/books/v1/volumes?q="
    }
}
