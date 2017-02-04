const fs = require('fs')
const build = require('tachyons-build-optimal-css')

const input = fs.readFileSync('./assets/tachyons@4.5.5.min.css', 'utf8')

build(input, {
  from: './assets/tachyons@4.5.5.min.css',
  to: 'tachyons-build-optimal.css',
  minify: true,
  whitelist: ['ml3','f6','link','white','ph3','intro-line','avenir','mb3','mb3','measure','fw6','mt0','f2','f-subheadline-l','ph5-ns','pv3','bg-black-10','mv3','w4', 'w2', 'mw4'],
  stripComments: true
}).then(result => {
  fs.writeFileSync('./assets/css/tachyons-build-optimal.css', result.css)
})
