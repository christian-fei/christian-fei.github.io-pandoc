require('./ui')

var production = /christianfei\.com/.test(window.location.href)

if (production) {
  require('./analytics')
}
