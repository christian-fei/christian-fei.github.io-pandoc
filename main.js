'use strict'

console.log('loaded js')

const $searchable = document.querySelectorAll('.searchable')
const $postLis = document.querySelectorAll('.searchable li') || []
const postTitles = Array.prototype.map.call($postLis, $el => $el.innerText)

if ($searchable) {
  $searchable.forEach(function ($s) {
    debugger
    const $search = document.createElement('input')
    $search.setAttribute('type', 'test')
    $search.setAttribute('class', 'search-posts')
    $search.setAttribute('placeholder', 'Search posts...')
    $search.onkeyup = handleSearchKeyUp
    $s.prepend($search)
  })
}

function handleSearchKeyUp (e) {
  const searchTerm = e.target.value
  const searchRegExp = new RegExp(searchTerm, 'i')
  const noMatch = postTitles.filter(t => searchRegExp.test(t)).length === 0

  let $noMatch = document.getElementById('no-match')

  if (noMatch) {
    if (!$noMatch) {
      $noMatch = document.createElement('div')
      $noMatch.setAttribute('id', 'no-match')
      $noMatch.innerText = 'No matches'
      $searchable.prepend($noMatch)
    }
  } else {
    if ($noMatch) $searchable.removeChild($noMatch)
  }

  $postLis.forEach(function ($postLi) {
    const show = noMatch || !searchTerm || searchRegExp.test($postLi.innerText)
    $postLi.style.display = show ? 'inherit' : 'none'
  })
}
