package org.example.worker.dto

data class SearchVolumeList(val kind: String, val totalItems: Int, val items: List<VolumeDto>) {
    data class VolumeDto(
            val kind: String,
            val id: String,
            val etag: String,
            val selfLink: String,
            val volumeInfo: VolumeInfoDto,
            val saleInfo: SaleInfoDto,
            val accessInfo: AccessInfoDto,
            val searchInfo: SearchInfoDto)

    data class VolumeInfoDto(
            val title: String,
            val authors: List<String>,
            val publishedDate: String,
            val description: String,
            val industryIdentifiers: List<IndustryIdentifiersDto>?,
            val readingModes: ReadingModesDto,
    )


    data class SaleInfoDto(val country: String, val saleability: String, val isEbook: Boolean)

    data class AccessInfoDto(
            val country: String,
            val viewability: String,
            val embeddable: Boolean,
            val publicDomain: Boolean,
            val textToSpeechPermission: String,
            val epub: IsAvailableDto,
            val pdf: IsAvailableDto,
            val webReaderLink: String,
            val accessViewStatus: String,
            val quoteSharingAllowed: Boolean
    )

    data class SearchInfoDto(val textSnippet: String)

    data class IndustryIdentifiersDto(val type: String, val identifier: String)
    data class ReadingModesDto(val text: Boolean, val image: Boolean)
    data class IsAvailableDto(val isAvailable: Boolean)
}
