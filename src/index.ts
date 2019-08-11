const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')

import 'reflect-metadata'
import {createKoaServer} from 'routing-controllers'
import AdController from './ads/controller'
import setupDb from './db'

const app = createKoaServer({
  controllers: [
    AdController
  ]
})

const port = process.env.PORT || 4000

app.use(cors())
app.use(bodyParser)

setupDb()
  .then(_ =>
    app.listen(port, () => console.log(`Listening on port ${port}`))
  )
  .catch(err => console.error(err))