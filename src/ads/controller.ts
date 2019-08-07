// src/pages/controller.ts
import { JsonController, Get, Param, Post, HttpCode, Body } from 'routing-controllers'
import adsById, { Ad } from './data'

type AdList = { ads: Ad[] }

@JsonController()
export default class AdController {

    @Get('/ads/:id')
    getAd(
        @Param('id') id: number
    ): Ad {
        return adsById[id]
    }

    @Get('/ads')
    allAds(): AdList {
        return {
            ads: Object.values(adsById)
        }
    }

    @Post('/ads')
    @HttpCode(201)
    createPage(
        @Body() body: Ad
    ): Ad {
        return body
    }
}