var allPosts = document.querySelectorAll('.article-link')
var searchInput = document.querySelector('.search-input')

searchInput.addEventListener('keyup', function (event) {
  var query = (this.value || '').toLowerCase()

  allPosts.forEach(function (post) {
    var title = post.getAttribute('data-title').toLowerCase()
    if (title.indexOf(query) >= 0) {
      post.classList.remove('hidden')
    } else {
      post.classList.add('hidden')
    }
  })
})
