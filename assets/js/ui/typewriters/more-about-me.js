var createTypewriter = require('./create')
var text = 'More about me'
var element = document.querySelector('.typewriter-more-about-me')
setTimeout(function () {
  createTypewriter(text, element)
}, 2000)
