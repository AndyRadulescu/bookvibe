package org.example.worker.controller

import com.fasterxml.jackson.databind.ObjectMapper
import org.example.worker.dto.BookDto
import org.example.worker.dto.SearchDto
import org.example.worker.dto.SearchVolumeList
import org.example.worker.service.SearchBookService
import org.springframework.amqp.rabbit.annotation.RabbitListener
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestParam
import org.springframework.web.bind.annotation.RestController
import reactor.core.publisher.Flux


@RestController
class SearchBookController(private val bookService: SearchBookService, private val mapper: ObjectMapper) {
    @GetMapping("/search")
    fun searchBook(@RequestParam queryParam: String): Flux<SearchVolumeList> {
        return bookService.searchBook(queryParam)
    }

    @RabbitListener(queues = ["books"])
    fun consumeMessages(message: SearchDto<BookDto>): SearchVolumeList? {
        println(message)
        val searchedVolumeListFlux = bookService.searchBook(message.data.book)
        return searchedVolumeListFlux.blockFirst()
    }

}
