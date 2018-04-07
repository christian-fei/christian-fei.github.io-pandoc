module.exports = function (allPosts, searchInput) {
  console.log('allPosts', allPosts)
  searchInput.addEventListener('keyup', function (event) {
    var query = (this.value || '').toLowerCase()

    allPosts.forEach(function (post) {
      var title = post.getAttribute('data-title').toLowerCase()
      if (title.indexOf(query) >= 0) {
        // post.classList.remove('hidden')
        post.style.display = 'inherit'
      } else {
        // post.classList.add('hidden')
        post.style.display = 'none'
      }
    })
  })
}
