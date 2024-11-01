
import { TypeBannerTypeName } from "./TypeBannerTypeName"

export type TypeBannerData = {
    BannerId: number,
    Name: string | null,
    StatusId: number,
    StatusName: string | null,
    BannerPageTypes: TypeBannerPageType[],
    PictureWidth: number,
    PictureHeight: number,
    DeepLink: {
        Id: number,
        Name: string | null,
        Link: string | null
    } | null,
    DeepLinkId: number,
    CustomURL: string | null,
    Order: number,
    Value: string | null,
    Title: string | null
}

export type TypeBannerPageType = {
    Id: number | string,
    Name: TypeBannerTypeName,
    DisplayName: string
}