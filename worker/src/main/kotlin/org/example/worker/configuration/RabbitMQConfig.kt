package org.example.worker.configuration

import org.springframework.amqp.core.Queue
import org.springframework.amqp.rabbit.connection.ConnectionFactory
import org.springframework.amqp.rabbit.listener.SimpleMessageListenerContainer
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import reactor.core.publisher.Flux
import reactor.core.publisher.FluxSink

@Configuration
class RabbitMQConfig {

    companion object {
        const val QUEUE_NAME = "worker"
    }

    @Bean
    fun queue(): Queue = Queue(QUEUE_NAME, true)

    @Bean
    fun rabbitMQFlux(connectionFactory: ConnectionFactory): Flux<String> {
        val sinkHolder = arrayOfNulls<FluxSink<String>>(1)

        val flux = Flux.create<String> { sink ->
            sinkHolder[0] = sink
        }.share()

        val container = SimpleMessageListenerContainer().apply {
            this.connectionFactory = connectionFactory
            this.setQueueNames(QUEUE_NAME)
            this.setMessageListener { message ->
                val messageBody = String(message.body)
                sinkHolder[0]?.next(messageBody)
            }
        }
        container.start()

        return flux
    }
}
