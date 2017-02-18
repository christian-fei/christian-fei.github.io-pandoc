---
title: 'Use Simple-Jekyll-Search on your blog in these easy steps'
date: 2017-02-05
layout: post
category: posts
---

# Requirements

- a Jekyll blog (of course)

# Create search.json

Create a file `search.json` with this content:

```
{% raw  %}
---
layout: nil
---
[
  {% for post in site.posts %}
    {
      "title"    : "{{ post.title | escape }}",
      "category" : "{{ post.category }}",
      "tags"     : "{{ post.tags | join: ', ' }}",
      "url"      : "{{ site.baseurl }}{{ post.url }}",
      "date"     : "{{ post.date }}"
    } {% unless forloop.last %},{% endunless %}
  {% endfor %}
]
{% endraw  %}
```

# Prepare HTML

In your template add the following markup to define a placeholder for the search widget:

```
<input type="text" id="search-input" placeholder="search posts..">
<br>
<div id="results-container"></div>
```

# Initialize search widget

Add the following script tag to your base/default `_layout`:

```
<script src="https://unpkg.com/simple-jekyll-search@1.1.6/dest/jekyll-search.min.js"></script>
```

And in a separate script tag:

```
<script>
SimpleJekyllSearch({
  search-input: document.getElementById('search-input'),
  resultsContainer: document.getElementById('results-container'),
  json: '/search.json',
  searchResultTemplate: '<li><a href="{% raw %}{{ site.url }}{% endraw %}{url}">{title}</a></li>'
})
</script>
```

---

That's all!
