---
layout: page
free_layout: true
title: My pocket items
permalink: /pocket/
---

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
        <b><a href="${item.url}">${item.title}</a></b> &nbsp; ${item.date}<br/>
      </li>
      `).join('')}
    </ul>
  `
})
</script>