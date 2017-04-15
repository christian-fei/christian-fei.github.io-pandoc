---
title: 'Loop jekyll data directory files'
date: 2017-04-15
layout: post
category: posts
---

Jekyll will look into the [`_data` directory](https://jekyllrb.com/docs/datafiles/).

Working with yml files is as easy as adding a file in this directory, and Jekyll will expose its contents on the `site.data.[YML_FILE_NAME]`.

In this example, rendering a list of authors listed in a YML file is as easy as:

```
{% raw %}
{% for authors in site.data.authors limit:8 %}
  {{ authors.name }}
{% endfor %}
{% endraw %}
```

The related Data file is located in `_data/authors.yml` with the following contents:

```
-
  name: Christian
  username: christian
-
  name: admin
  username: admin
```
