// src/ads/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body } from 'routing-controllers'
import Ad from './entity'

type AdList = { ads: Ad[] }

@JsonController()
export default class AdController {

    @Get('/ads/:id')
    getAd(
        @Param('id') id: number
    ): Promise<Ad | undefined> {
        return Ad.findOne(id)
    }

    @Get('/ads')
    async allAds(): Promise<AdList> {
        const ads = await Ad.find()
        return { ads }
    }

    @Post('/ads')
    @HttpCode(201)
    createAd(
        @Body() ad: Ad
    ): Promise<Ad> {
        return ad.save()
    }
}