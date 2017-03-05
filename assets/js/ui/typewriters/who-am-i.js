var nextText = require('next-text')
var constants = require('../constants')
var TYPING_INTERVAL = constants.TYPING_INTERVAL
var typewriter = document.querySelector('.typewriter-who-am-i')
var interval = 0
var text = "I'm an italian agile software developer, living in Trento (IT)"

nextPlaceholderFor(typewriter, text, interval)
interval = setInterval(function () {
  nextPlaceholderFor(typewriter, text, interval)
}, TYPING_INTERVAL)

function nextPlaceholderFor (typewriter, text, intervalHandle) {
  var currentPlaceholder = typewriter.innerHTML
  var nextPlaceholder = nextText(text, {}, currentPlaceholder).next()
  if (nextPlaceholder == text) {
    clearInterval(intervalHandle)
  }
  typewriter.innerHTML =  nextPlaceholder
}
