require('simple-jekyll-search')

var searchInput = document.getElementById('search-input')

window.SimpleJekyllSearch({
  searchInput: searchInput,
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a class="pa" href="{url}">{title}</a></li>'
})

var nextText = require('./utils/next-text')
var constants = require('./constants')
var TYPING_INTERVAL = constants.TYPING_INTERVAL
var INITIAL_DELAY = constants.INITIAL_DELAY
var typingText = 'Type / to search...'
var updateTextInterval = 0

searchInput.setAttribute('placeholder', '')
setTimeout(startTyping, INITIAL_DELAY)
searchInput.addEventListener('blur', startTyping)
searchInput.addEventListener('focus', function () {
  clearInterval(updateTextInterval)
})

function startTyping () {
  searchInput.setAttribute('placeholder', '')
  updateWithNextText()
  updateTextInterval = setInterval(updateWithNextText, TYPING_INTERVAL)
}

function updateWithNextText () {
  var currentPlaceholder = searchInput.getAttribute('placeholder')
  var nextPlaceholder = nextText(currentPlaceholder, typingText)
  if (nextPlaceholder === typingText) {
    clearInterval(updateTextInterval)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
