var socialLinks = document.querySelector('.social-links')

positionSocialLinks()

window.addEventListener('scroll', positionSocialLinks)
function positionSocialLinks () {
  var topPadding = 180
  var inView = isScrolledIntoView(socialLinks, topPadding)
  var method = inView ? 'remove' : 'add'
  var invertColor = inView ? 'add' : 'remove'
  socialLinks.classList[method]('fixed')
  socialLinks.classList[method]('black')
  socialLinks.classList[invertColor]('white')
}

function isScrolledIntoView (element, topPadding) {
  topPadding = topPadding || 0
  var scrollTop = document.body.scrollTop
  var height = scrollTop + window.innerHeight

  var elementTop = rect(element).top
  var elemBottom = elementTop + rect(element).height

  return ((elemBottom <= height) && (elementTop + topPadding >= scrollTop))
}

function rect (element) {
  return element.getBoundingClientRect()
}
