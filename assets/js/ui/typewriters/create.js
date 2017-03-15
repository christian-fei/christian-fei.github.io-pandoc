var nextText = require('next-text')
var constants = require('../constants')
var TYPING_INTERVAL = constants.TYPING_INTERVAL
var intervalHandle = 0

module.exports = function (text, typewriter) {
  nextPlaceholderFor(typewriter, text, intervalHandle)
}

function nextPlaceholderFor (typewriter, text, intervalHandle) {
  var currentPlaceholder = typewriter.innerHTML
  var nextPlaceholder = nextText(text, {}, currentPlaceholder).next()
  typewriter.innerHTML = nextPlaceholder
  if (nextPlaceholder.toString() == text) {
    clearTimeout(intervalHandle)
  } else {
    intervalHandle = setTimeout(function () {
      nextPlaceholderFor(typewriter, text, intervalHandle)
    }, TYPING_INTERVAL)
  }
}
