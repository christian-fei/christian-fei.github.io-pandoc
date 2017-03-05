var nextText = require('next-text')
var constants = require('../constants')
var TYPING_INTERVAL = constants.TYPING_INTERVAL
var searchInput = document.getElementById('search-input')
var searchBlurTypingInterval = 0
var searchFocusText = 'Type a keyword here...'

searchInput.addEventListener('blur', function () {
  clearInterval(searchBlurTypingInterval)
})
searchInput.addEventListener('focus', function () {
  searchInput.setAttribute('placeholder', '')
  nextPlaceholderFor(searchInput, searchFocusText, searchBlurTypingInterval)
  searchBlurTypingInterval = setInterval(function () {
    nextPlaceholderFor(searchInput, searchFocusText, searchBlurTypingInterval)
  }, TYPING_INTERVAL)
})

function nextPlaceholderFor (searchInput, text, intervalHandle) {
  var currentPlaceholder = searchInput.getAttribute('placeholder')
  var nextPlaceholder = nextText(text, {}, currentPlaceholder).next()
  if (nextPlaceholder == text) {
    clearInterval(intervalHandle)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
