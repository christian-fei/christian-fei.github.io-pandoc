module.exports = function (allPosts, searchInput) {
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
}
