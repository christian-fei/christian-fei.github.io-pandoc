module.exports = function nextText (currentText, text) {
    var currentLength = currentText.length
    var remainingText = text.slice(currentLength)
    var nextLetter = remainingText.length === 0 ? '' : remainingText[0]
    return currentText + nextLetter
}
