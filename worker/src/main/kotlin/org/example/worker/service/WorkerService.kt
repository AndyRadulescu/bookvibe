package org.example.worker.service

import org.springframework.amqp.rabbit.annotation.RabbitListener
import org.springframework.stereotype.Service
import reactor.core.publisher.Flux

@Service
class WorkerService(private val rabbitMQFlux: Flux<String>) {

    @RabbitListener(queues = ["worker"])
    fun consumeMessages(message: String) {
        println(message)
    }
}
