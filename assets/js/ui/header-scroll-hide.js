var navbar = document.querySelector('.navbar.is-fixed-top')

if (window.scrollY > 250) {
  navbar.style.display = 'none'
}

window.addEventListener('scroll', function () {
  if (window.lastY < window.scrollY) {
    navbar.style.display = 'none'
  }
  if (window.lastY > window.scrollY) {
    navbar.style.display = 'inherit'
  }
  window.lastY = window.scrollY
})
