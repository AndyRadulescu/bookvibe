package org.example.worker.dto

import java.util.*

data class SearchVolumeList(val kind: String, val totalItems: Int, val items: List<VolumeDto>) {
    data class VolumeDto(
            val kind: String,
            val id: String,
            val etag: String,
            val selfLink: String,
            val volumeInfo: VolumeInfoDto,
            val saleInfo: SaleInfoDto,
            val userInfo: UserInfo?,
            val accessInfo: AccessInfoDto,
            val searchInfo: SearchInfoDto) {

        data class VolumeInfoDto(
                val title: String,
                val subtitle: String?,
                val authors: List<String>,
                val publisher: String?,
                val publishedDate: String,
                val description: String?,
                val industryIdentifiers: List<IndustryIdentifiersDto>,
                val readingModes: ReadingModesDto?,
                val pageCount: Number,
                val dimensions: BookDimensions?,
                val printType: String?,
                val mainCategory: String?,
                val categories: List<String>?,
                val averageRating: Number?,
                val ratingCount: Number?,
                val contentVersion: String?,
                val imageLinks: ImageLinks?,
                val language: String,
                val previewLink: String,
                val infoLink: String,
                val canonicalVolumeLink: String
        ) {
            data class ImageLinks(
                    val smallThumbnail: String?,
                    val thumbnail: String?,
                    val small: String?,
                    val medium: String?,
                    val large: String?,
                    val extraLarge: String?
            )

            data class IndustryIdentifiersDto(val type: String, val identifier: String)
            data class ReadingModesDto(val text: Boolean, val image: Boolean)
            data class BookDimensions(
                    val height: String?,
                    val width: String?,
                    val thickness: String?
            )
        }

        data class SaleInfoDto(
                val country: String?,
                val saleability: String?,
                val isEbook: Boolean?,
                val onSaleDate: Date?,
                val listPrice: Price?,
                val retailPrice: Price?,
                val buyLink: String?
        )

        data class UserInfo(
                val review: Any,
                val readingPosition: Any,
                val isPurchased: Boolean?,
                val isPreordered: Boolean?,
                val updated: Date?
        )

        data class AccessInfoDto(
                val country: String,
                val viewability: String,
                val embeddable: Boolean,
                val publicDomain: Boolean,
                val textToSpeechPermission: String,
                val epub: FormatDto,
                val pdf: FormatDto,
                val webReaderLink: String,
                val accessViewStatus: String,
                val quoteSharingAllowed: Boolean,
                val downloadAccess: DownloadAccess?
        ) {
            data class FormatDto(
                    val isAvailable: Boolean,
                    val downloadLink: String?,
                    val acsTokenLink: String?
            )

            data class DownloadAccess(
                    val kind: String?,
                    val volumeId: String?,
                    val restricted: Boolean?,
                    val deviceAllowed: Boolean?,
                    val justAcquired: Boolean?,
                    val maxDownloadDevices: Number?,
                    val downloadsAcquired: Number?,
                    val nonce: String?,
                    val source: String?,
                    val reasonCode: String?,
                    val message: String?,
                    val signature: String?
            )
        }

        data class SearchInfoDto(val textSnippet: String)
    }

    data class Price(
            val amount: Number,
            val currency: Number
    )
}
