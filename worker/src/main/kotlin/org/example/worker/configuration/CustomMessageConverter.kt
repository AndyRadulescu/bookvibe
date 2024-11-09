package org.example.worker.configuration

import com.fasterxml.jackson.core.type.TypeReference
import com.fasterxml.jackson.databind.ObjectMapper
import org.example.worker.dto.BookDto
import org.example.worker.dto.SearchDto
import org.example.worker.dto.SearchVolumeList
import org.springframework.amqp.core.Message
import org.springframework.amqp.core.MessageProperties
import org.springframework.amqp.support.converter.MessageConversionException
import org.springframework.amqp.support.converter.MessageConverter
import org.springframework.stereotype.Component

@Component
class CustomMessageConverter(private val objectMapper: ObjectMapper) : MessageConverter {
    override fun fromMessage(message: Message): Any {
        return try {
            objectMapper.readValue(message.body, object : TypeReference<SearchDto<BookDto>>() {})
        } catch (e: Exception) {
            throw MessageConversionException("Failed to convert message", e)
        }
    }

    override fun toMessage(searchVolumeList: Any, properties: MessageProperties): Message {
        return try {
            val body = objectMapper.writeValueAsBytes(searchVolumeList)
            Message(body, properties)
        } catch (e: Exception) {
            throw MessageConversionException("Failed to convert object to message", e)
        }
    }

}
