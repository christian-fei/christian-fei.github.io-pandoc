var searchInput = document.getElementById('search-input')
var searchBlinkTimer = 0
var typingText = 'Type a keyword here...'
var slashToSearchText = 'Type / to search'

searchInput.setAttribute('placeholder', slashToSearchText)

searchInput.addEventListener('blur', function () {
  clearInterval(searchBlinkTimer)
  searchInput.setAttribute('placeholder', slashToSearchText)
})
searchInput.addEventListener('focus', function () {
  searchInput.setAttribute('placeholder', '')
  updateWithNextText()
  searchBlinkTimer = setInterval(updateWithNextText, 70)
})

function nextText (currentText) {
  var currentLength = currentText.length
  var remainingText = typingText.slice(currentLength)
  if (remainingText.length === 0) {
    clearInterval(searchBlinkTimer)
  }
  var nextLetter = remainingText.length === 0 ? '' : remainingText[0]
  return currentText + nextLetter
}
function updateWithNextText () {
  searchInput.setAttribute('placeholder', nextText(searchInput.getAttribute('placeholder')))
}
