var allPosts = document.querySelectorAll('.article-link')
var searchInput = document.querySelector('.search-input')

if (searchInput) {
  require('./slash-to-search')(searchInput)
  require('./blog-search')(allPosts, searchInput)
}
