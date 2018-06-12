var navbar = document.querySelector('.navbar.is-fixed-top')

// console.log('navbar', navbar)
// console.log('window.scrollY', window.scrollY)

// let lastCheck = Date.now()
// console.log('lastCheck', lastCheck)
// let lastScrollY

if (window.scrollY > 250) {
  navbar.style.display = 'none'
}

window.addEventListener('scroll', function () {
  if (window.lastY < window.scrollY) {
    navbar.style.display = 'none'
    // navbar.classList.add('hide')
  }
  if (window.lastY > window.scrollY) {
    navbar.style.display = 'inherit'
    // navbar.classList.remove('hide')
  }
  window.lastY = window.scrollY
})
