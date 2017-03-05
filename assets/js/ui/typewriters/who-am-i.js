var createTypewriter = require('./create')
var text = "I'm an italian agile software developer, living in Trento (IT)"
var element = document.querySelector('.typewriter-who-am-i')
createTypewriter(text, element)
