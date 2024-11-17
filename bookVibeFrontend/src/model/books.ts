export interface SearchVolumeListDto {
    kind: string;
    totalItems: number;
    items: VolumeDto[];
}

interface VolumeDto {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfoDto;
    saleInfo: SaleInfoDto;
    userInfo?: UserInfo;
    accessInfo: AccessInfoDto;
    searchInfo: SearchInfoDto;
}

interface VolumeInfoDto {
    title: string;
    subtitle?: string;
    authors: string[];
    publisher?: string;
    publishedDate: string;
    description?: string;
    industryIdentifiers: IndustryIdentifiersDto[];
    readingModes?: ReadingModesDto;
    pageCount: number;
    dimensions?: BookDimensions;
    printType?: string;
    mainCategory?: string;
    categories?: string[];
    averageRating?: number;
    ratingCount?: number;
    contentVersion?: string;
    imageLinks?: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

interface ImageLinks {
    smallThumbnail?: string;
    thumbnail?: string;
    small?: string;
    medium?: string;
    large?: string;
    extraLarge?: string;
}

interface IndustryIdentifiersDto {
    type: string;
    identifier: string;
}

interface ReadingModesDto {
    text: boolean;
    image: boolean;
}

interface BookDimensions {
    height?: string;
    width?: string;
    thickness?: string;
}

interface SaleInfoDto {
    country?: string;
    saleability?: string;
    isEbook?: boolean;
    onSaleDate?: Date;
    listPrice?: Price;
    retailPrice?: Price;
    buyLink?: string;
}

interface UserInfo {
    review: unknown;
    readingPosition: unknown;
    isPurchased?: boolean;
    isPreordered?: boolean;
    updated?: Date;
}

interface AccessInfoDto {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: FormatDto;
    pdf: FormatDto;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
    downloadAccess?: DownloadAccess;
}

interface FormatDto {
    isAvailable: boolean;
    downloadLink?: string;
    acsTokenLink?: string;
}

interface DownloadAccess {
    kind?: string;
    volumeId?: string;
    restricted?: boolean;
    deviceAllowed?: boolean;
    justAcquired?: boolean;
    maxDownloadDevices?: number;
    downloadsAcquired?: number;
    nonce?: string;
    source?: string;
    reasonCode?: string;
    message?: string;
    signature?: string;
}

interface SearchInfoDto {
    textSnippet: string;
}

interface Price {
    amount: number;
    currency: number;
}
