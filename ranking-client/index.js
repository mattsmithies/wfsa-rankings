'use latest'

import Routes from './routes'
import Api from './api'
import FormatResult from './format'

const getRankingType = Api(Routes)

const requestRankingFormatted = async (request) => {
  const rankingRequest = getRankingType[request]

  if (rankingRequest) {
    const result = await rankingRequest()
    const formatted = FormatResult(result)

    return formatted
  }

  return FormatResult();
}

const requestRanking = async (request) => {
  const rankingRequest = getRankingType[request]

  if (rankingRequest) {
    return await rankingRequest()
  }

  return []
}

module.exports = (request) => ({
  json: () => requestRanking(request),
  format: () => requestRankingFormatted(request),
})
