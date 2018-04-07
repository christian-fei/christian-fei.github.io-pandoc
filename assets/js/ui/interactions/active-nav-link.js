var $navbarItems = Array.prototype.slice.call(document.querySelectorAll('.navbar-item a'), 0)

console.log('window.location.href', window.location.href)
$navbarItems.forEach(function ($el) {
  console.log($el.href)
  if ($el.href === window.location.href) {
    $el.classList.toggle('has-text-weight-bold')
    // $el.classList.toggle('is-inverted')
  }
})
