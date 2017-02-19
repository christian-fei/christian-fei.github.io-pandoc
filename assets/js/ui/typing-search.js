var nextText = require('./utils/next-text')
var constants = require('./constants')
var TYPING_INTERVAL = constants.TYPING_INTERVAL
var searchInput = document.getElementById('search-input')
var searchBlinkInterval
var typingText = 'Type a keyword here...'

searchInput.addEventListener('blur', function () {
  clearInterval(searchBlinkInterval)
})
searchInput.addEventListener('focus', function () {
  searchInput.setAttribute('placeholder', '')
  updateWithNextText()
  searchBlinkInterval = setInterval(updateWithNextText, TYPING_INTERVAL)
})

function updateWithNextText () {
  var currentPlaceholder = searchInput.getAttribute('placeholder')
  var nextPlaceholder = nextText(currentPlaceholder, typingText)
  if (nextPlaceholder === typingText) {
    clearInterval(searchBlinkInterval)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
