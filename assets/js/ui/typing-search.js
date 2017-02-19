const nextText = require('./utils/next-text')
const constants = require('./constants')
const TYPING_INTERVAL = constants.TYPING_INTERVAL
const searchInput = document.getElementById('search-input')
let searchBlinkInterval
const typingText = 'Type a keyword here...'

searchInput.addEventListener('blur', function () {
  clearInterval(searchBlinkInterval)
})
searchInput.addEventListener('focus', function () {
  searchInput.setAttribute('placeholder', '')
  updateWithNextText()
  searchBlinkInterval = setInterval(updateWithNextText, TYPING_INTERVAL)
})

function updateWithNextText () {
  const currentPlaceholder = searchInput.getAttribute('placeholder')
  const nextPlaceholder = nextText(currentPlaceholder, typingText)
  if (nextPlaceholder === typingText) {
    clearInterval(searchBlinkInterval)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
