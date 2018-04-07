var allPosts = document.querySelectorAll('.blog-search')
var searchInput = document.querySelector('.search-input')

if (searchInput) {
  require('./slash-to-search')(searchInput)
  require('./blog-search')(allPosts, searchInput)
}

require('./active-nav-link')
require('./nav-burger')
