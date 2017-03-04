var searchInput = document.getElementById('search-input')
var sevenKeyCode = 55
var shiftKeyCode = 16

window.addEventListener('keydown', shiftKeyListener)
function shiftKeyListener (event) {
  window.removeEventListener('keydown', shiftKeyListener)
  var keyCode = event.keyCode
  if (shiftKeyCode === keyCode) {
    window.addEventListener('keydown', sevenKeyListener)
  } else {
    window.addEventListener('keydown', shiftKeyListener)
  }
}

function sevenKeyListener (event) {
  window.removeEventListener('keydown', sevenKeyListener)
  var keyCode = event.keyCode
  if (sevenKeyCode === keyCode) {
    searchComboActivated()
  } else {
    window.addEventListener('keydown', shiftKeyListener)
  }
}

function searchComboActivated () {
  setTimeout(function () { searchInput.value = '' }, 0)
  searchInput.focus()
}
