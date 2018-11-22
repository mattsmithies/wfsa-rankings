'use latest'

import axios from 'axios'

const requestData = (url) =>
  (auth) =>
    axios({
      url,
      method: 'GET',
    }).then(result => result.data.values)

module.exports = (routes) => {
  return {
    pro: requestData(routes.pro),
    am: requestData(routes.am),
    masters: requestData(routes.masters),
    women: requestData(routes.women),
  }
}
