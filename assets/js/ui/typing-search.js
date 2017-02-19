var nextText = require('./utils/next-text')
var constants = require('./constants')
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

var INITIAL_DELAY = constants.INITIAL_DELAY
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
  var nextPlaceholder = nextText(currentPlaceholder, text)
  if (nextPlaceholder === text) {
    clearInterval(intervalHandle)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
