'use latest'

import Express from 'express'
import Axios from 'axios'
import Webtask from 'webtask-tools'

import tableify from 'tableify'

import RankingRequest from './ranking-client'

const app = Express()

module.exports = Webtask.fromExpress(app)

const requestRankingContent = (type, response) => {
  RankingRequest(type).format().then(result => {
    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
    response.write(result)
    response.end()
  })
}

const requestRankingData = (type, response) => {
  RankingRequest(type).json().then(result => {
    response.json(result)
  })
}

app.get('/:type/data', (req, response) => {
  requestRankingData(req.params.type, response)
})

app.get('/:type', (req, response) => {
  requestRankingContent(req.params.type, response)
})
