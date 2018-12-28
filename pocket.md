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
window.fetch('/synced.json')
.then((response) => response.json())
.then(pocketItems => {
  console.log('pocketItems', pocketItems)
  const pocketItemsContainer = document.getElementById('pocket-items')

  const ul = document.createElement('ul')
  pocketItemsContainer.appendChild(ul)

  let itemsAdded = 0
  const intervalHandle = setInterval(() => {
    const itemToAdd = pocketItems.items[itemsAdded]
    if (!itemToAdd) return clearInterval(intervalHandle)
    const li = document.createElement('li')
    li.innerHTML = `
      <b>${itemToAdd.date} &nbsp; <a target="_blank" href="${itemToAdd.url}">${itemToAdd.title}</a></b><br/>
    `
    li.setAttribute('class', 'pocket-item')
    ul.appendChild(li)
    itemsAdded++
  }, 60)
})
</script>