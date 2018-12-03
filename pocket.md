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
console.log('works')
window.fetch('/synced.json')
.then((response) => response.json())
.then(pocketItems => {
  console.log('pocketItems', pocketItems)
  const pocketItemsContainer = document.getElementById('pocket-items')
  pocketItemsContainer.innerHTML = `
    <ul>
      ${pocketItems.items.map(item => `
      <li>
        <b><a target="_blank" href="${item.url}">${item.title}</a></b> &nbsp; ${item.date}<br/>
      </li>
      `).join('')}
    </ul>
  `
})
</script>