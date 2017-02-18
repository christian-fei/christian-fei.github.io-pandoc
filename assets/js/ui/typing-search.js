var searchInput = document.getElementById('search-input')
var searchBlinkTimer = 0
var typingText = '...'
var slashToSearchText = 'Type / to search'

searchInput.setAttribute('placeholder', slashToSearchText)

searchInput.addEventListener('blur', function () {
  clearInterval(searchBlinkTimer)
  searchInput.setAttribute('placeholder', slashToSearchText)
})
searchInput.addEventListener('focus', function () {
  updateWithNextText()

  searchBlinkTimer = setInterval(updateWithNextText, 200)
})

function nextText (currentText) {
  var currentLength = currentText.length
  var remainingText = typingText.slice(currentLength)
  return remainingText.length === 0 ? '' : currentText + remainingText[0]
}
function updateWithNextText () {
  searchInput.setAttribute('placeholder', nextText(searchInput.getAttribute('placeholder')))
}
