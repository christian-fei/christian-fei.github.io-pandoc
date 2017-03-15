require('simple-jekyll-search/dest/jekyll-search.min.js')

var searchInput = document.getElementById('search-input')

window.SimpleJekyllSearch({
  searchInput: searchInput,
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a class="pa" href="{url}">{title}</a></li>'
})
