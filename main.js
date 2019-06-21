'use strict'

window.initSearchable = initSearchable

const $searchables = document.querySelectorAll('.searchable')

if ($searchables) {
  $searchables.forEach(initSearchable)
}

function initSearchable ($searchable) {
  const $search = document.createElement('input')
  $search.setAttribute('type', 'test')
  $search.setAttribute('placeholder', 'Search posts...')
  $search.onkeyup = handleSearchKeyUp
  $searchable.prepend($search)

  function handleSearchKeyUp (e) {
    const searchTerm = e.target.value
    const searchRegExp = new RegExp(searchTerm, 'i')
    const $searchableItems = $searchable.querySelectorAll('li') || []
    const postTitles = Array.prototype.map.call($searchableItems, $el => $el.innerText)
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

    $searchableItems.forEach(function ($postLi) {
      const show = noMatch || !searchTerm || searchRegExp.test($postLi.innerText)
      $postLi.style.display = show ? 'inherit' : 'none'
    })
  }
}
