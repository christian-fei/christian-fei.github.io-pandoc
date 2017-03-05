var nextText = require('next-text')
var searchInput = document.getElementById('search-input')
var constants = require('../constants')
var INITIAL_DELAY = constants.INITIAL_DELAY
var TYPING_INTERVAL = constants.TYPING_INTERVAL
var searchBlurText = 'Type / to search...'
var searchFocusTypingInterval = 0

searchInput.setAttribute('placeholder', '')
setTimeout(startTyping, INITIAL_DELAY)
searchInput.addEventListener('blur', startTyping)
searchInput.addEventListener('focus', function () {
  clearInterval(searchFocusTypingInterval)
})

function startTyping () {
  searchInput.setAttribute('placeholder', '')
  nextPlaceholderFor(searchInput, searchBlurText, searchFocusTypingInterval)
  searchFocusTypingInterval = setInterval(function () {
    nextPlaceholderFor(searchInput, searchBlurText, searchFocusTypingInterval)
  }, TYPING_INTERVAL)
}

function nextPlaceholderFor (searchInput, text, intervalHandle) {
  var currentPlaceholder = searchInput.getAttribute('placeholder')
  var nextPlaceholder = nextText(text, {}, currentPlaceholder).next()
  if (nextPlaceholder == text) {
    clearInterval(intervalHandle)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
