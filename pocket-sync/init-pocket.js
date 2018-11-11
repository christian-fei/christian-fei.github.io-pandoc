/*

curl "https://getpocket.com/v3/oauth/request" -H "Content-Type: application/json; charset=UTF-8" -H "X-Accept: application/json" --data '{"consumer_key":"POCKET_CONSUMER_KEY","redirect_uri":"localhost"}'

> {"code":"POCKET_REQUEST_TOKEN","state":null}

open "https://getpocket.com/auth/authorize?request_token=POCKET_REQUEST_TOKEN&redirect_uri=http://localhost:4000"

curl "https://getpocket.com/v3/oauth/authorize" -H "Content-Type: application/json; charset=UTF-8" -H "X-Accept: application/json" --data '{"consumer_key":"POCKET_CONSUMER_KEY","code":"POCKET_REQUEST_TOKEN"}'

> {"access_token":"POCKET_ACCESS_TOKEN","username":"crifei93"}

curl "https://getpocket.com/v3/get" -H "Content-Type: application/json; charset=UTF-8" -H "X-Accept: application/json" --data '{"consumer_key":"POCKET_CONSUMER_KEY","access_token":"POCKET_ACCESS_TOKEN", "count": "10"}'

> {...}

*/

const got = require('got')
const waitForUserInput = require('wait-for-user-input')

module.exports = async (POCKET_CONSUMER_KEY) => {
  const headers = { 'Content-Type': 'application/json', 'X-Accept': 'application/json' }

  const { body: oauthRequestBody } = await got.post('https://getpocket.com/v3/oauth/request', {
    headers,
    body: JSON.stringify({
      consumer_key: POCKET_CONSUMER_KEY,
      redirect_uri: 'localhost'
    })
  })

  const { code: POCKET_REQUEST_TOKEN } = JSON.parse(oauthRequestBody)

  console.log('POCKET_REQUEST_TOKEN', POCKET_REQUEST_TOKEN)

  const POCKET_URL = `https://getpocket.com/auth/authorize?request_token=${POCKET_REQUEST_TOKEN}&redirect_uri=http://localhost:4000`

  await waitForUserInput(`Open the following url in a browser and log in with your pocket account: ${POCKET_URL}\nPRESS ENTER TO CONTINUE AFTER LOGGING IN\n`)

  const { body: oauthAuthorizeBody } = await got.post('https://getpocket.com/v3/oauth/authorize', {
    headers,
    body: JSON.stringify({
      consumer_key: POCKET_CONSUMER_KEY,
      code: POCKET_REQUEST_TOKEN
    })
  })

  // console.log('oauthAuthorizeBody', oauthAuthorizeBody)

  const { access_token: POCKET_ACCESS_TOKEN } = JSON.parse(oauthAuthorizeBody)

  console.log('POCKET_ACCESS_TOKEN', POCKET_ACCESS_TOKEN)

  return POCKET_ACCESS_TOKEN
}
