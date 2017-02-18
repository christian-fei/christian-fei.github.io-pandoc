var searchInput = document.getElementById('search-input')
var trackedKeys = []

window.addEventListener('keydown', function (event) {
  track(event.keyCode)
  if (searchActiveCombo()) {
    setTimeout(function () { searchInput.value = '' }, 0)
    searchInput.focus()
  } else {
  }
})

function track (key) {
  trackedKeys.unshift(key)
  trackedKeys.length = 2
}
function searchActiveCombo () {
  var sevenKey = 55
  var shiftKey = 16
  return trackedKeys[0] === sevenKey && trackedKeys[1] === shiftKey
}
