'use strict'
var SimpleJekyllSearch = require('simple-jekyll-search')

console.log(SimpleJekyllSearch)

SimpleJekyllSearch({
  searchInput: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a class="pa" href="{{ site.url }}{url}">{title}</a></li>'
})
