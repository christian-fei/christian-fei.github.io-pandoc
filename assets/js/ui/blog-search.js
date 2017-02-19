const SimpleJekyllSearch = require('simple-jekyll-search')


const searchInput = document.getElementById('search-input')

window.SimpleJekyllSearch({
  searchInput: searchInput,
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a class="pa" href="{url}">{title}</a></li>'
})

const nextText = require('./utils/next-text')
const constants = require('./constants')
const TYPING_INTERVAL = constants.TYPING_INTERVAL
const INITIAL_DELAY = constants.INITIAL_DELAY
const typingText = 'Type / to search...'
let updateTextInterval

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
  const currentPlaceholder = searchInput.getAttribute('placeholder')
  const nextPlaceholder = nextText(currentPlaceholder, typingText)
  if (nextPlaceholder === typingText) {
    clearInterval(updateTextInterval)
  }
  searchInput.setAttribute('placeholder', nextPlaceholder)
}
