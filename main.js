'use strict'

window.initSearchable = initSearchable

main()

function main () {
  const $searchables = document.querySelectorAll('.searchable')
  const $headings = document.querySelectorAll('h1:not(.no-anchorify), h2:not(.no-anchorify), h3:not(.no-anchorify)')

  if ($searchables) {
    $searchables.forEach(initSearchable)
  }

  if ($headings) {
    $headings.forEach(anchorify)
  }
}

function initSearchable ($searchable) {
  const $search = document.createElement('input')
  $search.setAttribute('class', 'searchable-input')
  $search.setAttribute('type', 'test')
  $search.setAttribute('placeholder', 'Search posts...')
  $search.onkeyup = handleSearchKeyUp
  $searchable.parentNode.prepend($search, $searchable)

  function handleSearchKeyUp (e) {
    const searchTerm = e.target.value
    const searchRegExp = new RegExp(searchTerm.replace(' ', '.*'), 'i')
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

function anchorify (element) {
  const id = (element.innerText || '').toLowerCase().replace(/ /gi, '-')
  element.setAttribute('id', id)
  const text = element.innerText
  element.innerHTML = `<a href="#${id}">${text}</a>`
}
