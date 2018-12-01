---
layout: page
free_layout: true
title: My pocket items
permalink: /pocket-items/
---

my pocket items

<script type="text/javascript">
console.log('works')
window.fetch('/synced.json')
.then((response) => response.json())
.then(pocketItems => {
  console.log('pocketItems', pocketItems)
})
</script>