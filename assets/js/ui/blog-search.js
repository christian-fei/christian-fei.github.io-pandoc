require('simple-jekyll-search')

var searchInput = document.getElementById('search-input')

window.SimpleJekyllSearch({
  searchInput: searchInput,
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a class="pa" href="{url}">{title}</a></li>'
})

var nextText = require('./utils/next-text')
var typingText = 'Type / to search...'
var updateTextInterval

searchInput.setAttribute('placeholder', '')
setTimeout(startTyping, 1666)
searchInput.addEventListener('blur', startTyping)
searchInput.addEventListener('focus', function () {
  clearInterval(updateTextInterval)
})

function startTyping () {
  searchInput.setAttribute('placeholder', '')
  updateWithNextText()
  updateTextInterval = setInterval(updateWithNextText, 80)
}

function updateWithNextText () {
  var currentPlaceholder = searchInput.getAttribute('placeholder')
  var nextPlaceholder = nextText(currentPlaceholder, typingText)
  if (nextPlaceholder === typingText) {
    clearInterval(updateTextInterval)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
