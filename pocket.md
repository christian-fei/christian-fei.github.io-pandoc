---
layout: page
free_layout: true
title: ''
permalink: /pocket/
---

You can skim through the articles I bookmarked on [pocket](http://getpocket.com) since 2014.

<div id="pocket-items">
</div>

<script type="text/javascript">
window.fetch('/pocket.json')
.then((response) => response.json())
.then(pocketItems => {
  console.log('pocketItems', pocketItems)
  const pocketItemsContainer = document.getElementById('pocket-items')

  const $searchable = document.createElement('ul')
  $searchable.classList.add('searchable')
  $searchable.classList.add('fade-out-bottom')
  pocketItemsContainer.appendChild($searchable)
  // window.initSearchable($searchable)
  console.time('render')
  const fragment = document.createDocumentFragment()

  pocketItems.items.forEach(function (itemToAdd) {
    if (!itemToAdd) return
    const li = document.createElement('li')
    li.innerHTML = `
      <b>${itemToAdd.date} &nbsp; <a target="_blank" href="${itemToAdd.url}">${itemToAdd.title}</a></b><br/>
    `
    li.setAttribute('class', 'pocket-item')
    fragment.appendChild(li)
  })

  $searchable.appendChild(fragment)
  console.timeEnd('render')
})
</script>
