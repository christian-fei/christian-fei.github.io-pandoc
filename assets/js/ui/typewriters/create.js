var nextText = require('next-text')
var constants = require('../constants')
var TYPING_INTERVAL = constants.TYPING_INTERVAL
var intervalHandle = 0

module.exports = function (text, typewriter) {
  nextPlaceholderFor(typewriter, text, intervalHandle)
  intervalHandle = setInterval(function () {
    nextPlaceholderFor(typewriter, text, intervalHandle)
  }, TYPING_INTERVAL)
}

function nextPlaceholderFor (typewriter, text, intervalHandle) {
  var currentPlaceholder = typewriter.innerHTML
  var nextPlaceholder = nextText(text, {}, currentPlaceholder).next()
  if (nextPlaceholder == text) {
    clearInterval(intervalHandle)
  }
  typewriter.innerHTML = nextPlaceholder
}
