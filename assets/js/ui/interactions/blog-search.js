require('simple-jekyll-search/dest/jekyll-search.min.js')

window.SimpleJekyllSearch({
  searchInput: document.querySelector('.search-input'),
  resultsContainer: document.querySelector('.results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a class="pa" href="{url}">{title}</a></li>'
})
