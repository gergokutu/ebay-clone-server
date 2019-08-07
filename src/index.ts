// src/index.ts
import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import AdController from './ads/controller'

const port = process.env.PORT || 4000

const app = createKoaServer({
  controllers: [
    AdController
  ]
})

app.listen(port, () => console.log(`Listening on port ${port}`))