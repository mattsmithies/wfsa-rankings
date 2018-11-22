'use latest'

const domain = 'https://sheets.googleapis.com/v4/spreadsheets/'
const sheet = '1PZJYZVyxvLv5xRF7qwBuimBNGrEs45hE40xmQPEW90g'
const key = 'AIzaSyAKnGKS2-HxmBg__Zzaw8YZfiCRZOIQLwk'

const createEndpoint = (resource) => `${domain}${sheet}/values/${resource}?key=${key}`

module.exports = {
  pro: createEndpoint('pro'),
  am: createEndpoint('am'),
  masters: createEndpoint('masters'),
  women: createEndpoint('women'),
}
