const got = require('got')
const { POCKET_CONSUMER_KEY } = require('./secrets.json')

module.exports = async (POCKET_ACCESS_TOKEN) => {
  const headers = { 'Content-Type': 'application/json', 'X-Accept': 'application/json' }

  const {body: items} = await got.post('https://getpocket.com/v3/get', {
    headers,
    body: JSON.stringify({
      consumer_key: POCKET_CONSUMER_KEY,
      access_token: POCKET_ACCESS_TOKEN,
      count: '10',
      detailType: 'complete'
    })
  })

  return items
}