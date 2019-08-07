// src/pages/controller.ts
import { JsonController, Get, Param } from 'routing-controllers'
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
}